package com.rsc.babystepprogram;

public class Point {

	int x,y;
	Point(int x, int y)
	{
		this.x = x;
		this.y = y;
		display(this.x,this.y);
	}
	void display(int a, int b)
	{
		System.out.println("The value for a is  "+ a + " and value for b is  "+b);
	}
	public static void main(String[] args) 
	{
		Point p = new Point(5,10);
		
	}
}
