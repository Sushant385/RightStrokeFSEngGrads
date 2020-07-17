package com.rsc.babystepprogram;

import java.util.*;
public class PrimeNumber {
	
	static boolean isprime(int n)
	{
		if(n < 2)
		{
			return false;
		}
		int i = 2;
		while(i <= n/2)
		{
			if(n%i==0)
			{
				return false;
			}
			i+=1;
		}
		return true;
	}

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		System.out.println(isprime(n));
	}
}
