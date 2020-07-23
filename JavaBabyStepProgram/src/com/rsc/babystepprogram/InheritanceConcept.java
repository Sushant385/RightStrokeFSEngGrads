package com.rsc.babystepprogram;

import java.util.*;
public class InheritanceConcept {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		String t = sc.next();
		int pg = sc.nextInt();
		int pr = sc.nextInt();
		int s = sc.nextInt();
		CD cd = new CD(t,pr,pg,s);
		cd.display();
	}
}

class Publication 
{
	String title;
	int price;
	Publication(String title,int price)
	{
		this.title = title;
		this.price = price;
	}
	public void display()
	{
		System.out.println("The Title of book is : "+ title);
		System.out.println("Price  :  " + price);
	}
}

class Book extends Publication
{
	int page;
	Book(String title, int price ,int page)
	{
		super(title,price);
		this.page = page;
	}
	public void display()
	{
		super.display();
		System.out.println("Pages  :  " + page);
	}
}

class CD extends Book
{
	int size;
	CD(String title,int price,int page,int size)
	{
		super(title , price, page);
		this.size = size;
	}
	public void display()
	{
		super.display();
		System.out.print("Size :  "+ size);
	}
}