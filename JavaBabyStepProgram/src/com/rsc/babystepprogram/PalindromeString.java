package com.rsc.babystepprogram;

import java.util.*;

public class PalindromeString {

	static boolean isPalindrome(String s)
	{
		String r = "";
		for(int i = s.length()-1;i>=0;i--)
		{
			r+=s.charAt(i);
		}
		if(s.equals(r))
			return true;
		else
			return false;
	}
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		String s = sc.nextLine();
		System.out.println(isPalindrome(s));
	}
}
