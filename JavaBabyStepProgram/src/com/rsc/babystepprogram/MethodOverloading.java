package com.rsc.babystepprogram;

public class MethodOverloading {

	public void Show()
	{
		System.out.print("Hello  ");
	}
	public void Show(String s)
	{
		System.out.print(s + "...");
	}
	public static void main(String[] args) 
	{
		MethodOverloading mol = new MethodOverloading();
		mol.Show();
		mol.Show("Sushant");
	}
}
