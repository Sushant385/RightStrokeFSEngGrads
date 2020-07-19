package mockvita;

import java.util.*;
public class Swayamvar {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		sc.nextLine();
		String B = sc.nextLine();
		String G = sc.nextLine();
		Queue<Character> b = new LinkedList<Character>();
		Queue<Character> g = new LinkedList<Character>();
		for(int i = 0; i<N;i++)
		{
			b.add(B.charAt(i));
			g.add(G.charAt(i));
		}
		
		for(int i = 0;i <= b.size();i++)
		{
			for(int j = 0;j <= g.size();j++)
			{
				if(b.element() == g.element())
				{
					b.remove();
					g.remove();
				}
				else
				{
					char c = g.remove();
					g.add(c);
				}
			}
		}
//		System.out.println(b);
//		System.out.println(g);
		System.out.println(b.size());
	}

}
