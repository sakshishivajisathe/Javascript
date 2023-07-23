// Function to get a unique set of users from List1 which are not in List2
function List1(List1, List2) {
  const set1 = new Set(List1);
  const set2 = new Set(List2);

  const UsersList1 = new Set([...set1].filter(user => !set2.has(user)));
  return Array.from(UsersList1);
}

// Function to get a unique set of users from List2 which are not in List1
function List2(List1, List2) {
  const set1 = new Set(List1);
  const set2 = new Set(List2);

  const UsersList2 = new Set([...set2].filter(user => !set1.has(user)));
  return Array.from(UsersList2);
}

// Function to get a set of users who are present in List1 and List2 both (intersection of list1 & list2)
function CommonUsers(List1, List2) {
  const set1 = new Set(List1);
  const set2 = new Set(List2);

  const commonUsers = new Set([...set1].filter(user => set2.has(user)));
  return Array.from(commonUsers);
}

// Sample data
const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// Get the results
const UsersList1 = List1(list1, list2);
const UsersList2 = List2(list1, list2);
const common_users = CommonUsers(list1, list2);

// Display the results
console.log("users in List1 but not in List2:", UsersList1);
console.log(" users in List2 but not in List1:", UsersList2);
console.log("Common users in List1 and List2:", common_users);