# Javascript_Application
Create a Javascript application :
Below are two list of User List1=[‘Arjun’, ‘Adwait’, ‘Swapnil’,’Amit’, ‘Vishal’, ‘Adnan’] List2=[ ‘Adwait’,’Laxman’,’Amit’, ‘Adnan’,’Nitin’,’Gaurav’] 
Find following output (Use collection)
a. Get a unique set of users from List1 which are not in List2
b. Get a unique set of users from List2 which are not in List1 
c. Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2) 

1)APPROACH

List1 Function (List1(List1, List2)):

This function first converts both input lists, List1 and List2, into sets (set1 and set2) using the Set constructor. Sets are used because they automatically remove duplicates and provide faster lookup times for set operations.
It then filters the elements in set1 to keep only those that are not present in set2 using the filter method with !set2.has(user) condition.
The resulting set, UsersList1, contains unique users from List1 that are not present in List2.
Finally, the function converts UsersList1 set back to an array using Array.from() and returns the result.
List2 Function (List2(List1, List2)):

This function follows a similar approach to the List1 function but focuses on List2.
It converts List1 and List2 into sets (set1 and set2).
It filters the elements in set2 to keep only those that are not present in set1.
The resulting set, UsersList2, contains unique users from List2 that are not present in List1.
The function converts UsersList2 set back to an array using Array.from() and returns the result.
CommonUsers Function (CommonUsers(List1, List2)):

This function is also similar in approach but aims to find users that are common between List1 and List2.
It converts List1 and List2 into sets (set1 and set2).
It filters the elements in set1 to keep only those that are present in set2.
The resulting set, commonUsers, contains unique users that are common to both List1 and List2.
The function converts commonUsers set back to an array using Array.from() and returns the result.


Certainly! Let's break down the problem and understand what the code aims to achieve:

Problem Description:

The problem revolves around two lists, List1 and List2, containing user names. The goal is to perform three different operations on these lists:

Get a list of users from List1 that are not present in List2.
Get a list of users from List2 that are not present in List1.
Get a list of users that are common to both List1 and List2.
Solution Approach:

List1 Function (List1(List1, List2)):

This function first converts both input lists, List1 and List2, into sets (set1 and set2) using the Set constructor. Sets are used because they automatically remove duplicates and provide faster lookup times for set operations.
It then filters the elements in set1 to keep only those that are not present in set2 using the filter method with !set2.has(user) condition.
The resulting set, UsersList1, contains unique users from List1 that are not present in List2.
Finally, the function converts UsersList1 set back to an array using Array.from() and returns the result.
List2 Function (List2(List1, List2)):

This function follows a similar approach to the List1 function but focuses on List2.
It converts List1 and List2 into sets (set1 and set2).
It filters the elements in set2 to keep only those that are not present in set1.
The resulting set, UsersList2, contains unique users from List2 that are not present in List1.
The function converts UsersList2 set back to an array using Array.from() and returns the result.
CommonUsers Function (CommonUsers(List1, List2)):

This function is also similar in approach but aims to find users that are common between List1 and List2.
It converts List1 and List2 into sets (set1 and set2).
It filters the elements in set1 to keep only those that are present in set2.
The resulting set, commonUsers, contains unique users that are common to both List1 and List2.
The function converts commonUsers set back to an array using Array.from() and returns the result.
Sample Output:
Let's assume the sample data provided:
const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

The output of calling the functions would be:
users in List1 but not in List2: [ 'Arjun', 'Swapnil', 'Vishal' ]
users in List2 but not in List1: [ 'Laxman', 'Nitin', 'Gaurav' ]
Common users in List1 and List2: [ 'Adwait', 'Amit', 'Adnan' ]

These results demonstrate the unique users in List1 but not in List2, the unique users in List2 but not in List1, and the common users in List1 and List2.
Overall, the code provides a convenient and efficient way to perform these set operations on the given lists of user names.

2)POSITIVE AND NEGATIVE TEST CASES
Positive Test Cases:
Valid Input Lists:
Input List1 and List2 contain valid user names with no duplicates.
Example:
const list1 = ['Alice', 'Bob', 'Charlie', 'David'];
const list2 = ['Charlie', 'David', 'Eve', 'Frank'];

Non-Overlapping Lists:
Input List1 and List2 have no common elements, ensuring proper separation.
Example:
const list1 = ['Alice', 'Bob', 'Charlie'];
const list2 = ['David', 'Eve', 'Frank'];

Lists with Duplicates:
Input List1 and List2 contain duplicate user names. The code should handle duplicates and provide the correct unique user set.
Example:
const list1 = ['Alice', 'Bob', 'Alice', 'Charlie'];
const list2 = ['Charlie', 'Bob', 'David', 'David'];

Empty Lists:
Input List1 and/or List2 are empty. The code should handle this gracefully and return empty arrays as output.
Example:
const list1 = [];
const list2 = ['Alice', 'Bob', 'Charlie'];

Lists with Special Characters:
Input List1 and List2 contain user names with special characters and spaces. The code should handle such cases correctly.
Example:
const list1 = ['user1', 'user-2', 'user 3', '@user4'];
const list2 = ['user-2', 'user 3', '@user4', 'user5'];

Negative Test Cases:
Invalid Input Type:
Input List1 and List2 are not arrays. The code should handle this and provide appropriate error handling.
Example:
const list1 = 'Alice, Bob, Charlie';
const list2 = ['David', 'Eve', 'Frank'];

Invalid User Names:

Input List1 and List2 contain invalid user names (e.g., null, undefined, or non-string values). The code should handle these cases and provide proper results.
Example:
const list1 = ['Alice', null, 'Bob', undefined, 'Charlie'];
const list2 = ['David', 'Eve', 'Frank'];

Lists with Large Data:

Input List1 and List2 are very large, with thousands or millions of elements. The code should be able to handle large data efficiently without running into performance issues.
Example:
// Large arrays with thousands of elements
const list1 = [...];
const list2 = [...];

Lists with Different Data Types:
Input List1 and List2 contain elements of different data types. The code should handle this situation gracefully and provide proper results.
Example:
const list1 = ['Alice', 'Bob', 'Charlie'];
const list2 = ['David', 123, true, 'Frank'];

Remember that the quality of test cases is crucial to ensure code reliability and robustness. 
The code should handle different scenarios gracefully and produce correct results regardless of the input data

3)Frequently Asked Questions (FAQs) for the provided code:

#What does the List1 function do?
The List1 function takes two input lists, List1 and List2, and returns a new array containing the unique elements from List1 that are not present in List2.

#What does the List2 function do?
The List2 function takes two input lists, List1 and List2, and returns a new array containing the unique elements from List2 that are not present in List1.

#What does the CommonUsers function do?
The CommonUsers function takes two input lists, List1 and List2, and returns a new array containing the unique elements that are common between List1 and List2.

#What data types are accepted for the input lists?
The code expects both input lists to be arrays containing elements of any data type, but for proper functionality, it is best to have elements of the same data type, typically strings.

#Are duplicates handled in the input lists?
Yes, duplicates in the input lists are automatically handled because the code converts the input lists to sets, which inherently eliminates duplicates.

#How are the results displayed?
The code uses console.log to display the results of calling each function with the provided sample data. The results are shown as arrays of unique users and common users.

#What happens if one or both input lists are empty?
The code gracefully handles empty lists and returns an empty array as the result for any function if one or both input lists are empty.

#How does the code handle user names with special characters or spaces?
The code should handle user names with special characters or spaces correctly, as long as the input data is provided as valid arrays.

#What if there are thousands or millions of elements in the input lists?
The code should be able to handle large data sets efficiently due to the use of sets, which have faster lookup times compared to arrays.

#How does the code handle invalid user names or non-string elements?
The code should handle invalid user names or non-string elements in the input lists and provide appropriate results without raising errors.

#Can the code handle scenarios where the input lists are of different lengths?
Yes, the code can handle input lists of different lengths, and the results will be based on the unique users present in each list.

#Is the order of elements in the output arrays guaranteed?
The order of elements in the output arrays may not be the same as the order in the input lists because sets are unordered collections. The code converts the sets back to arrays, and the order may change during this conversion.

#Can the code handle non-array inputs or inputs with different data types?
The code should handle non-array inputs or inputs with different data types and provide appropriate error handling or results. However, providing valid arrays as input is recommended to ensure proper functionality.

#Can I modify the code to handle case-insensitive comparisons for user names?
Yes, you can modify the code to handle case-insensitive comparisons by converting all user names to lowercase or uppercase before performing the set operations. This way, you can treat "Alice" and "alice" as the same user, for example.

