import { Injectable } from "@nestjs/common";
import { RegisterDto } from "../dto/register.dto";
import { RegisterUseCase } from "./register.use-case";
import { LoginDto } from "src/auth/dto/login.dto";
import { LoginUseCases } from "./login.use-cases";

@Injectable()
    export class AuthService{
        constructor( 
            private readonly registerUseCases: RegisterUseCase,
            private readonly loginUseCases: LoginUseCases,
        ){}

        async register(data: RegisterDto) {
                return await this.registerUseCases.execute(data);
            }
        async login(data:LoginDto ) {
            return await this.loginUseCases.execute(data);
        }
        
    }