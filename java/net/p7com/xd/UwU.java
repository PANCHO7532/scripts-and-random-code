package net.p7com.xd;

public class UwU {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AlterClass uwuContent[] = new AlterClass[3];
		uwuContent[0] = new AlterClass("PANCHO7532", (byte) 21, 165.3);
		uwuContent[1] = new AlterClass("Pepe15", (byte) 23, 100.5);
		uwuContent[2] = new AlterClass("Ming97", (byte) 18, 50.0);
		for(int c = 0; c < uwuContent.length; c++) {
			System.out.println(uwuContent[c].getData());
		}
		UwU2 example = new UwU2(uwuContent);
		System.out.println(example.getLength());
	}
}
class AlterClass {
	String uwuName;
	byte uwuAge;
	double uwuIncome;
	public AlterClass(String name, byte age, double income) {
		uwuName = name;
		uwuAge = age;
		uwuIncome = income;
	}
	public String getData() {
		return uwuName + " has " + uwuAge + " years old, and has an income of: " + uwuIncome;
	}
}