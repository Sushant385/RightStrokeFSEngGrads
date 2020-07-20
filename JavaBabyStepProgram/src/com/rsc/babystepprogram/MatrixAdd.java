package com.rsc.babystepprogram;

import java.util.*;
public class MatrixAdd {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter number of rows in matrix 1");
		int r1 = sc.nextInt();
		System.out.println("Enter number of columns in matrix 1");
		int c1 = sc.nextInt();
		int[][] m1 = new int[r1][c1];
		System.out.println("Enter elements in Matrix 1");
		for(int i = 0; i < r1; i++)
		{
			for(int j = 0; j < c1; j++)
			{
				m1[i][j] = sc.nextInt();
			}
		}
		int[][] m2 = new int[r1][c1];
		System.out.println("Enter elements in Matrix 2");
		for(int i = 0; i < r1; i++)
		{
			for(int j = 0; j < c1; j++)
			{
				m2[i][j] = sc.nextInt();
			}
		}
		int[][] res = new int[r1][c1];
		for(int i = 0; i < r1; i++)
		{
			for(int j = 0; j < c1; j++)
			{
				res[i][j] = m1[i][j] + m2[i][j];
			}
		}
		for(int[] i : res)
		{
			for(int j : i)
			{
				System.out.print(j+"   ");
			}
			System.out.println();
		}
	}
}
