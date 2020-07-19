package com.rsc.babystepprogram;

import java.util.*;
public class FirstNPrimeNum {

	static boolean isPrime(int a)
	{
		if(a < 2)
			return false;
		int i = 2;
		while(i < a)
		{
			if(a%i==0)
				return false;
			i+=1;
		}
		return true;
	}
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		List<Integer> l = new ArrayList<Integer>();
		int i = 1;
		while(l.size()!=n)
		{
			if(isPrime(i))
				l.add(i);
				i+=1;
		}
		System.out.println(l);
	}
}
