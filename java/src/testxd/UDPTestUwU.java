package testxd;
import java.net.DatagramSocket;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.SocketException;

public class UDPTestUwU {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		UDPInternalClassTest udpServer = new UDPInternalClassTest(65534, 20, 20);
		try {
			udpServer.bind();
		} catch(Exception e) {
			System.out.println("xd");
		}
	}
	public static boolean trueFunction() {
		return false;
	}
}
class UDPInternalClassTest {
	DatagramSocket udpServer;
	int udpPort;
	int udpTxBufferSize;
	int udpRxBufferSize;
	public UDPInternalClassTest(int port, int TxBufferSize, int RxBufferSize) {
		udpPort = port;
		udpTxBufferSize = TxBufferSize;
		udpRxBufferSize = RxBufferSize;
	}
	public void bind() throws SocketException, IOException {
		byte txbuffer[];
		udpServer = new DatagramSocket(udpPort);
		while(true) {
			txbuffer = new byte[udpTxBufferSize];
			DatagramPacket incomingPacket = new DatagramPacket(txbuffer, txbuffer.length);
			udpServer.receive(incomingPacket);
			//so we fix the size uwu
			System.out.println("packet length: " + incomingPacket.getLength());
			System.out.println("arrdata length: " + incomingPacket.getData().length);
			byte rxbuffer[] = new byte[incomingPacket.getLength()];
			System.arraycopy(txbuffer, 0, rxbuffer, 0, incomingPacket.getLength());
			DatagramPacket outgoingPacket = new DatagramPacket(rxbuffer, rxbuffer.length, incomingPacket.getAddress(), incomingPacket.getPort());
			udpServer.send(outgoingPacket);
		}
	}
	/*private byte[] removeExtraZeros(byte arr[]) {
		byte arr2[];
		for(int c = 0; c < arr.length; c++) {
			
		}
		return arr2;
	}*/
}