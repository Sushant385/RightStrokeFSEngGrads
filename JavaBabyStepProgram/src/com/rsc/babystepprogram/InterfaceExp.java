package com.rsc.babystepprogram;

import java.util.*;

interface Shape
{
	public void CalculateArea();
}

class Square implements Shape
{
	int s;
	Square(int s)
	{
		this.s = s;
	}
	public void CalculateArea()
	{
		System.out.println("The area of Square is  :  " + (s*s));
	}
}

class Circle implements Shape
{
	int r;
	Circle(int r)
	{
		this.r = r;
	}
	public void CalculateArea()
	{
		System.out.println("The area of Circle is  :  " + (3.14*r*r));
	}
}

class Triangle implements Shape
{
	int b,h;
	Triangle(int b, int h)
	{
		this.b = b;
		this.h = h;
	}
	public void CalculateArea()
	{
		System.out.println("The arae of Triangle is  :  " + (0.5*b*h));
	}
}
public class InterfaceExp {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		Square sq  = new Square(sc.nextInt());
		Circle c = new Circle(sc.nextInt());
		Triangle t = new Triangle(sc.nextInt(),sc.nextInt());
		sq.CalculateArea();
		c.CalculateArea();
		t.CalculateArea();
	}
}
