using System;
using System.Linq;

namespace Raft
{
    class Program
    {
        static void Main(string[] args)
        {

            string input = Console.ReadLine();
            string[] list = input.Split(' ');
            int n = Int32.Parse(list[0]);
            int k = Int32.Parse(list[1]);

            string goatWheightInput = Console.ReadLine();
            string[] goatWheightArr = goatWheightInput.Split(' ');
            int[] goats = Array.ConvertAll(goatWheightArr, s => int.Parse(s));

            Array.Sort(goats);
            Array.Reverse(goats);

            for (int i = 0; i < goats.Count(); i++)
                Console.WriteLine(goats[i]);

            int c = getCapacity(goats, k);
            Console.WriteLine("Min capacity: " + c);
        }

        public static int getCapacity(int[] goats, int k)
        {
            int capacity = goats[0];
            int lastGoat = goats.Count() - 1;

            while (!validCapacity(capacity, k, goats))
            {
                capacity += goats[lastGoat];
                lastGoat--;
            }

            return capacity;
        }

        public static bool validCapacity(int capacity, int steps, int[] arr)
        {
            // copy the array
            int[] tempArray = new int[arr.Count()];
            for (int i = 0; i < arr.Count(); i++)
                tempArray[i] = arr[i];
  
            int currentCapacity;
            for (int j = 0; j < steps; j++)
            {
                currentCapacity = 0;
                for (int i = 0; i < arr.Count(); i++)
                {
                    // check if goat can fit
                    if (currentCapacity + arr[i] <= capacity)
                    {
                        currentCapacity += arr[i];
                        // remove goat
                        tempArray = tempArray.Where((source, index) => index != i).ToArray();
       
                    }
                }
            }
            if (tempArray.Count() > 0)
                return false;
            return true;
        }
    }
}
