package com.rsc.babystepprogram;

import java.util.*;
public class ArmstrongNum {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int a = n;
		int s = 0,r= 0;
		while(n>0)
		{
			r = n%10;
			s = s+r*r*r;
			n = n/10;
		}
		if(s==a)
			System.out.println(a + " is Armstrong Number ");
		else
			System.out.println(a + " is not Armstrong Number ");
	}

}
