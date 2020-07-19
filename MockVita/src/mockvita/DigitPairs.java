package mockvita;

import java.util.*;
import java.lang.*;
class DigitPairs 
{
	public static void bit(String s,int j,int arr[])
	{
		int a=Character.getNumericValue(s.charAt(0));
		int b=Character.getNumericValue(s.charAt(1));
		int c=Character.getNumericValue(s.charAt(2));

		int m1=(Math.max(a,Math.max(b,c)))*11;
		int m2=(Math.min(a,Math.min(b,c)))*7;
		arr[j]=(m1+m2)%100;
	}
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int arr[] = new int[n];
		for(int i=0;i<n;i++)
		{
			arr[i]=sc.nextInt();
			bit(Integer.toString(arr[i]),i,arr);

		}
		int c=0;
		for(int i=0;i<n;i++)
		{ 
			int b=0;
			for(int j=i+2;j<n;j+=2)
            {
				if(arr[i]/10 == arr[j]/10)
				{
					c+=1;
					b+=1;

					if(b>2)
						c=2;
				}
            }
			}
		System.out.println(c);
	}
}