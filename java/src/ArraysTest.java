
public class ArraysTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		byte arr1[];
		arr1 = new byte[2];
		arr1[0] = 0;
		arr1[1] = 1;
		System.out.println(arr1[0] + " " + arr1[1]);
		arr1 = new byte[3];
		arr1[0] = 2;
		arr1[1] = 3;
		arr1[2] = 71;
		System.out.println(arr1[0] + " " + arr1[1] + arr1[2]);
		System.out.println((char) (arr1[2] & 0xFF));
	}

}
