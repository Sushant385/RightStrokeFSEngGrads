package com.rsc.babystepprogram;

public class JavaScientificCalculator {
	
	public int add(int a, int b)
	{
		return a+b;
	}
	public float divide(int a,int b)
	{
		return (float) a/b;
	}
	public float squareroot(int a)
	{
		return (float) Math.sqrt(a);
	}
	public float cuberoot(int a)
	{
		return (float) Math.cbrt(a);
	}
	public double tan(double a)
	{
		double r = Math.toRadians(a);
		return Math.tan(r);
	}
	public double cos(double a)
	{
		double r = Math.toRadians(a);
		return Math.cos(r);
	}
	
	public static void main(String[] args) {
		System.out.println("Hello Everyone....");
		JavaScientificCalculator jsc = new JavaScientificCalculator();
		System.out.println("The Sum is  " + jsc.add(5, 4));
		System.out.println("The division is  " + jsc.divide(10, 5) );
		System.out.println("The SquareRoot is   " + jsc.squareroot(5));
		System.out.println("The CubeRoot is  " + jsc.cuberoot(2));
		System.out.println("Tan of 45 is  " + jsc.tan(45));
		System.out.println("Cos of 30 is  " + jsc.cos(30));
		System.out.println("Program Completed ");
	}

}
