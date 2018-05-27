/*...Tic-Tac-Toe...*/
//$ gcc -Wall -o T ttt.c[ENTER]
//$ ./T[ENTER]
#include<stdio.h>
#include<unistd.h>
char T[9]={'1','2','3','4','5','6','7','8','9'};
char isGO(),rEql(char,char,char);
void dspl(),play(char,char);
int main(){
	char p0,p1;
	int d;
	printf("Player 0: please Choose your Symbol: \nEnter 0 for '0' OR 1 for 'X':");
	scanf("%d",&d);
	p0=(d==0)?'0':'X',p1=(d==0)?'X':'0';
	play(p0,p1);
	return 0;
}
void play(char p0,char p1){
	int r=0,p,d;
	do{
		printf("Board Status:\n");
		dspl();
		d=isGO();
		if(d)	break;
		else{
			printf("Player %d's Turn\n",r%2);
		label:	printf("Please enter a valid empty position: ");
			scanf("%d",&p);
			if(p<1 || p>9 || T[p-1]==p0 || T[p-1]==p1){
				printf("Sorry...Wrong Position\n");
				goto label;
			}
			T[p-1]=(r%2)?p1:p0;
			++r;
		}
	}while(r<9);
	if(d==0)	printf("Winner: NONE\n\n");
	else		printf("Winner: Player %d\n\n",(r+1)%2);
}
//are Equal?
char rEql(char a,char b,char c){
	return ((T[a]==T[b]) && (T[b]==T[c]));
}
//Is Game Over
char isGO(){
	return (rEql(0,1,2) || rEql(3,4,5) || rEql(6,7,8) || rEql(0,3,6) || rEql(1,4,7) || rEql(2,5,8) || rEql(0,4,8) || rEql(2,4,6));
}
//Display Board
void dspl(){
	printf(" %c | %c | %c\n",T[0],T[1],T[2]);
	printf("---+---+---\n");
	printf(" %c | %c | %c\n",T[3],T[4],T[5]);
	printf("---+---+---\n");
	printf(" %c | %c | %c\n",T[6],T[7],T[8]);
}
