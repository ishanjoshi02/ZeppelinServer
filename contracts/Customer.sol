//solium-disable linebreak-style
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Customer {
    string name;
    string username;
    string passwordHash;
    address ethAddress;
    int userCount;

    struct User {
        string name;
        string username;
        string passwordHash;
        address ethAddress;
    }

    mapping(address => User) Users;

    function signup(string memory _name, string memory _username, string memory _passwordHash) public { 
        User memory newUser;
        newUser.name = _name;
        newUser.username = _username;
        newUser.passwordHash = _passwordHash;
        ethAddress = msg.sender;
        Users[ethAddress] = newUser;
    }

    function login(string memory _passwordHash) public view returns (User memory) {
        if (keccak256(bytes(_passwordHash)) == keccak256(bytes(Users[msg.sender].passwordHash))) {
            return Users[msg.sender];
        }
        else {}
        
    }
}