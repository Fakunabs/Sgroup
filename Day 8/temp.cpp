#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

int main()
{
    int n;
    cin >> n;
    cin.ignore();
    string s;
    getline(cin, s);

    /*

    Input :
    7
    1 2 3 4 5 6

    Output :
    8

    */

    vector<int> v;
    string temp = "";
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == ' ')
        {
            v.push_back(stoi(temp));
            temp = "";
        }
        else
        {
            temp += s[i];
        }
    }
    v.push_back(stoi(temp));
    

    cout << "N-th term" << endl;
}