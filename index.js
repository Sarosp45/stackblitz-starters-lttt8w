import java.io.*;
class Solution {
public static void main(String args[] ) throws Exception {
BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
System.out.println("Enter the value of N");
int N=Integer.parseInt(br.readLine());
Solution objSolution=new Solution();
objSolution.fizzBuzz(N);
}
public static void fizzBuzz(int N) throws IOException
{

for(int i=0;i<=N;i++)
{
if((i%5==0)&&(i%3==0))
{
System.out.println("fizzBuzz");
}
else
{
if((i%3)==0)
{
System.out.println("Fizz");
}
if((i%5)==0)
{
System.out.println("Buzz");
}
if((i%3!=0)&&(i%5!=0))
{
System.out.println(i);
}

}
}



}
}
