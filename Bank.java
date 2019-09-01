//oioi
import java.util.Scanner;

public class Bank
{   
    static int length = 0;
    private SavingsAccount list[] = new SavingsAccount[10];

    public void addAccount(String name, int interest, int balance)
    {
        list[length] = new SavingsAccount(name, interest, balance);
        length++;
    }

    public void printAccounts()
    {
        for(int i = 0; i < length; i++)
        {
            System.out.println("Owner: " + list[i].getName() + " Balance: " +  list[i].getBalance());
        }
    }

    public static void main(String args[])
    {
        Bank bank = new Bank();
        Scanner scanner = new Scanner(System.in);

        char code = scanner.next().charAt(0);

        while(code != 'X')
        {
            if( code == 'N')
            {
                String name = scanner.next();
                int interest = scanner.nextInt();
                int balance = scanner.nextInt();
                
                bank.addAccount(name, interest, balance);

            }
            else if(code == 'D')
            {
                int amount = scanner.nextInt();
                bank.list[length - 1].deposit(amount);
            }
            else if(code == 'W')
            {
                int amount = scanner.nextInt();
                bank.list[length - 1].withdraw(amount);
            }

            code = scanner.next().charAt(0);
        }

        for(int i = 0; i < length; i++)
        {
            bank.list[i].addInterest();
        }

        bank.printAccounts();

        scanner.close();

    }


}

