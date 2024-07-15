const addition = (a: number, b:number): number => {
  return a + b;
}

function divide(a: number, b: number):number {
  return a/b;
}

const multiply = function(a:number, b:number): number {
  return a * b;
}

const logger = (message: string):void => {
  console.log(message);
};

const error = (message: string): void => {
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}) => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todaysWeather);


const profile = {
  name: 'alex',
  age: 20,
  coords:{
    lat:0,
    lng: 15
  },
  setAge(age: number):void {
    this.age = age;
  }
}

const {age, name}:{age: number, name: string} = profile

const {
  coords: {lat, lng} 
}: { coords: {lat: number, lng: number}} = profile;

const carMakers = ['ford','chevy','toyota'];

const carMakersEmpty:string[] = [];
const dates = [new Date(),new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

const myCar = carMakers[0];
carMakers.map((car: string):string => {
  return car.toUpperCase();
})

const importantDates:(Date | string)[] = [new Date(),'2024-02-02']
importantDates.push(new Date())
importantDates.push("222");