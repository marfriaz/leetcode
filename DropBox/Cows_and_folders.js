/* Problem Description: In a folder system there are: 
-shared folders -confidential folders Each folder has a list of cows that are explicit members of the folder. 
If you are an explicit member, you can access that folder and all its 
non-confidential child folders through ineritance A folder is called a 
leaf if it is not the parent of any other folder. A cow is uncool if there 
is at least one leaf they cannot access. Determine which cows are uncool. 

Input: 3 # Q cows 2 1 # M shared folders, N confidential folders 1 1 0 
# folder id of shared, K cows have explicit access, K ids (M=2) 2 1 1 
# folder id of shared, K cows have explicit access, K ids (M=2) 3 3 0 1 2 
# folder id of confidential, K cows with explicit access, 
K ids 2 # single non-negative int G 1 2 # U,V. U folder id of parent, 
V child folder id (G=2) 1 3 # U,V. U folder id of parent, V child folder id (G=2) 
Output: (Return ID of uncool cow, cow that cannot access at least one leaf) 
2 SF1 / \ SF2 CF3 SF1 (0) / \ SF2 (0,1) CF3 (0,1,2) 
Cow 0 has access to SF1 id=1 (1 1 0) 
Cow 1 has access to SF2 id=2 (2 1 1) 
Cow 0 also has access because folder id=1 is a parent of folder id=2 (1 2) 
Cow 0,1,2 has access to CF3 id=3 (3 3 0 1 2) Cow 2 cannot access SF2 id=2, so return 

2.Custom input: (Becomes tree below) 4 4 2 1 2 0 2 2 1 3 5 1 1 6 3 0 1 3 3 0 4 3 0 1 2 5 1 2 1 3 2 4 2 5 3 6 
(Unshaded nodes = shared folders, shaded nodes = confidential nodes in the picture) 
Expected output: 2,3 (the cows that don't have access to all leaf nodes)
*/
