package p1;

import java.util.*;

public class Llist {
	
	static List<Integer> Febo(int Max)
	{
		List<Integer> l1 = new ArrayList<>();
		int a = 0, b = 1,c=1;
		while(c < Max)
		{
			c = a+b;
			l1.add(c);
			a=b;
			b=c;
		}
		return l1;
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		LinkedList<Integer> l = new LinkedList<Integer>();
		for(int i = 0; i < n; i++)
		{
			l.add(sc.nextInt());
		}
		int Max = Collections.max(l);
		List<Integer> l1 = new ArrayList<>();
		l1 = Febo(Max);
		List<Integer> l2 = new ArrayList<>();
		for(int i = 0; i < n; i++)
		{
			for(int j = 0;j < l1.size();j++)
			{
				if(l.get(i)==l1.get(j) && !l2.contains(l.get(i))) {
					l2.add(l.get(i));
				}	
			}
		}
		int Sum = 0, Mul = 1;
		for(int i = 0; i < l2.size(); i++)
		{
			Sum += l2.get(i);
			Mul *= l2.get(i);
		}
		System.out.println(Sum);
		System.out.println(Mul);
	}
}
