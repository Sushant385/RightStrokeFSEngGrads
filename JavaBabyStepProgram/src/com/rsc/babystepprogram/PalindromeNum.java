package com.rsc.babystepprogram;

import java.util.*;

public class PalindromeNum {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		 int n = sc.nextInt();
		 int a = n,s = 0, r;
		 while(n>0)
		 {
			 r = n%10;
			 s = (s * 10)+r;
			 n = n/10;
		 }
		 if(s==a)
			 System.out.println(a + " is a Palindrome Number ");
		 else
			 System.out.println(a + " is not a Palindrome Number ");
	}

}
