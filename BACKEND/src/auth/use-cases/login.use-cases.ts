import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

import { LoginDto } from "src/auth/dto/login.dto";
import { FindUserByEmailRepository } from "src/auth/repository";

@Injectable()
export class LoginUseCases {
    constructor(
        private readonly findUserByEmailRepository: FindUserByEmailRepository,
        private readonly jwtService: JwtService,
        private readonly logger: Logger,
    ) {}

    async execute(data: LoginDto) {
        this.logger.log('Realizando login...');

        const user = await this.findUserByEmailRepository.findByEmail(
            data.email,
        );

        if (!user) {
            throw new BadRequestException('Email ou senha inválidos');
        }

        const passwordMatch = await bcrypt.compare(
            data.password,
            user.passwordHash,
        );

        if (!passwordMatch) {
            throw new BadRequestException('Email ou senha inválidos');
        }

        const payload = {
            sub: user.id,
            email: user.email,
        };

        const accessToken = this.jwtService.sign(payload);

        this.logger.log('Login realizado com sucesso!');

        return {
            accessToken,
            user,
        };
    }
}