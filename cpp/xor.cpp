/*
 * ----------------------------------------------------
 * xorCryptography
 * Copyright (c) PANCHO7532 - P7COMunications LLC 2021
 * -----------------------------------------------------
 * Crypts strings and coming soon, stuff, into XOR.
 * Requires base64.cpp that can be obtained here: https://github.com/ReneNyffenegger/cpp-base64
 * Made on my Android phone under Termux and in half an hour because i was bored
 * -=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=
 */
#include <iostream>
#include <string>
#include "base64.cpp"

using namespace std;
string inputData, inputKey, returnData;
string xorCrypto(string data, string key) {
	string xorProcess = "";
	for(int dataPos = 0, keyPos = 0; dataPos < data.length(); dataPos++, keyPos++) {
		if(keyPos >= key.length()) {
			keyPos = 0;
		}
		xorProcess += data[dataPos] ^ key[keyPos];
	}
	return xorProcess;
}
int main() {
	int choice;
	cout << "xorCryptography v1.0\r\n";
	cout << "Copyright (c) P7COMunications LLC 2021\r\n\r\n";
	cout << "Operation Mode\r\n[1] Encrypt\r\n[2] Decrypt\r\nChoose: ";
	cin >> choice;
	switch(choice) {
	case 1:
		//encrypt
		cout << "Key: ";
		cin >> inputKey;
		cout << "Data: ";
		cin >> inputData;
		returnData = xorCrypto(inputData, inputKey);
		returnData = base64_encode(returnData);
		cout << "\r\nResult:\r\n";
		cout << returnData << endl;
		break;
	case 2:
		//decrypt
		cout << "Key: ";
		cin >> inputKey;
		cout << "Crypted Data (Base64): ";
		cin >> inputData;
		inputData = base64_decode(inputData);
		returnData = xorCrypto(inputData, inputKey);
		cout << "\r\nResult:\r\n";
		cout << returnData << endl;
		break;
	default:
		return 1;
	}
	return 0;
}
