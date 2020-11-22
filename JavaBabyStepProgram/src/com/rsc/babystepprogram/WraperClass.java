package com.rsc.babystepprogram;

public class WraperClass {

	public static void main(String[] args) 
	{
		Integer iobj = new Integer(10);
		Character cobj = new Character('A');
		Boolean bobj = new Boolean("true");
		Float fobj = new Float(10.5f);
		System.out.println(iobj.floatValue());
		System.out.println(cobj);
		System.out.println(bobj);
		System.out.println(fobj.intValue());
	}
}
