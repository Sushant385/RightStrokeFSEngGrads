package com.rsc.babystepprogram;

import java.util.*;
public class StaticMethod 
{
	static void Febo(int n)
	{
		int a = 1,b=1,c=0;
		System.out.print(a+" "+b);
		for(int i = 2; i < n; i++)
		{
			c = a + b;
			System.out.print(" "+ c +" ");
			a = b;
			b = c;
		}
	}
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter upto which place you want Febonacci Series");
		int n = sc.nextInt();
		Febo(n);
	}
}
