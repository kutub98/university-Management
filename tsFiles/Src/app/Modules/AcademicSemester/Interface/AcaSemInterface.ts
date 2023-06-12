import { Model } from 'mongoose';

export type IAcademicSemesterConstantMonth = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "Septembar" |"Octobar" |"Novembar" | "Decembar" ;


export type IAcademicSemesterConstanSeasonTitle = "Autumn" | "Summer" | "Fall"
export type IAcademicSemesterConstanSeasonCode= "01" | "02" | "03";

export type IAcademicSemester = {
  title:IAcademicSemesterConstanSeasonTitle 
  year: number,
  code: IAcademicSemesterConstanSeasonCode,
  startMonth: IAcademicSemesterConstantMonth,
  endMonth: IAcademicSemesterConstantMonth
}

export type AcademicSemesterModal = Model<IAcademicSemester>