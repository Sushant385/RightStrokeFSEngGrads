package com.rsc.babystepprogram;

public class GenericMethodExp {

	public static <E> void printArray(E[] inputArray)
	{
		for(E element : inputArray)
		{
			System.out.printf("%s",element);
			System.out.println();
		}
	}
	public static void main(String[] args) 
	{
		Integer[] intArray = {1,2,3,4,5};
		Double[] doubleArray = {1.1,1.2,1.3,1.4,1.5};
		Character[] charArray = {'A','B','C','D','E'};
		System.out.println("Integer array : "); 
		printArray(intArray);
		System.out.println("Character Array  : ");
		printArray(charArray);
		System.out.println("Double Array :  ");
		printArray(doubleArray);
	}
}