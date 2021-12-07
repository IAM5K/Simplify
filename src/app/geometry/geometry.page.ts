import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.page.html',
  styleUrls: ['./geometry.page.scss'],
})
export class GeometryPage implements OnInit {

  a:number;
  b:number;
  c:number;
  home:boolean= true;
  len:number;
  height:number;
  width:number;
  perimeter:number;
  area:number;
  volume:number;
  shape:string;
  dimension:number=1;
  shapetype:Array<{name:string,defination:string,examples:string}>=[
    {name:"2 Dimension" ,
    defination:"A shape that can be cutted out of a sheet of paper or in mathematical language we can say that a shape that has only length and width or width and height or that can pe placed on graph with X and Y axis.",
    examples:" Circle, Triangle, Square, Rectangle, etc."},
    {name:"3 Dimension",
    defination:"A shape that can be cutted out of a sheet of paper or in mathematical language we can say that a shape that has only length and width or width and height or that can pe placed on graph with X and Y axis.",
    examples:" Sphere, Cube, Cuboid, Cylinder, etc."},
  ];
  
  shapes:any=[
    {
      dimension:"2D",
      name:"Circle",
      value:"circle",
      givendata:{
        id:"",
        parameters:""
      }
    },
    {
      dimension:"2D",
      name:"Square",
      value:"square",
      givendata:{
        id:"",
        parameters:""
      }
    },
    {
      dimension:"2D",
      name:"Rectangle",
      value:"rectangle",
      givendata:{
        id:"",
        parameters:""
      }
    },
    {
      dimension:"2D",
      name:"Quadilateral",
      value:"quadilateral",
      givendata:{
        id:"",
        parameters:""
      }
    },
    {
      dimension:"2D",
      name:"Rombhus",
      value:"",
      givendata:{
        id:"",
        parameters:""
      }
    },
    {
      dimension:"2D",
      name:"Parallelogram",
      value:"",
      givendata:{
        id:"",
        parameters:""
      }
    },
    {
      dimension:"2D",
      name:"Trapezium",
      value:"",
      givendata:{
        id:"",
        parameters:""
      }
    },  
    {
      dimension:"2D",
      name:"",
      value:"",
      givendata:{
        id:"",
        parameters:""
      }
    },
    {
      dimension:"2D",
      name:"",
      value:"",
      givendata:{
        id:"",
        parameters:""
      }
    },
    {
      dimension:"2D",
      name:"",
      value:"",
      givendata:{
        id:"",
        parameters:""
      }
    },
    
  ];


  constructor() { }
  reset(){
    this.dimension=1;
  }
  
  ngOnInit() {
    if (this.dimension==2) {
      if (this.shape =="triangle") {
        console.log("Triangle Selected");
        
      }
    
    }
  }
  circle(r:number,pi:number){
    this.area=pi*r*r;
    this.perimeter=2*pi*r;

  }
  square(a:number){
    this.area=a*a;
    this.perimeter=4*a;

  }
  rectangle(l:number,b:number){
    this.area=l*b;
    this.perimeter=2*(l+b)

  }
  areaoftriangle(b:number,h:number){
    this.area=0.5*b*h;
  }
  perimeteroftriangle(a,b,c){
    this.perimeter=a+b+c;
  }
  

}
