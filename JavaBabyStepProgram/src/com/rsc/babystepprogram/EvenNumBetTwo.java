package com.rsc.babystepprogram;

import java.util.*;
public class EvenNumBetTwo {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		List<Integer> l = new ArrayList<Integer>();
		for(int i = a; i <= b; i++)
		{
			if(i % 2 == 0)
				l.add(i);
		}
		System.out.println(l);
	}
}
