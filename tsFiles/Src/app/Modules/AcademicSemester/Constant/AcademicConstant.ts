import { IAcademicSemesterConstanSeasonCode, IAcademicSemesterConstanSeasonTitle, IAcademicSemesterConstantMonth } from "../Interface/AcaSemInterface";

export const academicSemesterConstantMonth : IAcademicSemesterConstantMonth[] = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "Septembar" ,"Octobar" ,"Novembar" , "Decembar"] 

export const academicSemesterConstanSeasonTitle : IAcademicSemesterConstanSeasonTitle []= ["Autumn" , "Summer" , "Fall"];
export const academicSemesterConstanSeasonCode :IAcademicSemesterConstanSeasonCode [] = ["01", "02", "03"]


export const AcademicSemesterTitleCodeMappr :{
  [key: string]: string
} = {
  Autumn: "01",
  Summer: "02",
  Fall: "03"
}