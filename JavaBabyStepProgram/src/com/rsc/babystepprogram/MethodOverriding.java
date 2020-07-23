package com.rsc.babystepprogram;

public class MethodOverriding {

	public static void main(String[] args) 
	{
		B b = new B();
		b.Show("Ranchi");
	}
}

class A
{
	public void Show()
	{
		System.out.println("Hello...! this is Sushant. ");
	}
}
class B extends A
{
	public void Show(String place)
	{
		super.Show();
		System.out.println("I am from  " + place);
	}
}