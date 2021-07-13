import java.lang.reflect.InvocationTargetException;

public class ClassesTest {

	public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, SecurityException, IllegalArgumentException, InvocationTargetException {
		// TODO Auto-generated method stub
		Class<?> myclass = Class.forName("testxd.UDPTestUwU");
		Object o = myclass.newInstance();
		System.out.println(myclass.getMethod("trueFunction").invoke(o));
	}
}