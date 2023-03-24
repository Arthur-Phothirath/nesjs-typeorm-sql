import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserProfileDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString()
  dob: string;
}
