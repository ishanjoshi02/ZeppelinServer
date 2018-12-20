//solium-disable linebreak-style
pragma solidity ^0.5.0;
// pragma experimental ABIEncoderV2;

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
    string[] usernames;
    uint count = 0;

    function signup(string memory _name, string memory _username, string memory _passwordHash) public { 
        User memory newUser;
        newUser.name = _name;
        newUser.username = _username;
        newUser.passwordHash = _passwordHash;
        ethAddress = msg.sender;
        Users[ethAddress] = newUser;
        count += 1;
    }

<<<<<<< HEAD
    function login(string memory _passwordHash) public view returns (User memory) {
        if (keccak256(bytes(_passwordHash)) == keccak256(bytes(Users[msg.sender].passwordHash))) {
            //TODO: 
            //Return user data instead of struct
            return Users[msg.sender];
=======
    function login(string memory _passwordHash) public view returns (string memory) {
        if (compareStrings(_passwordHash, Users[msg.sender].passwordHash)) {
            return "Logged In";
>>>>>>> 699b656795319d6802ddf2d6ac7626112afb3f8e
        }
        return "Login Failed";

    }

    function getUserCount() public view returns (uint) {
        return count;
    }

    function compareStrings(string memory one, string memory two)
    internal
    pure
    returns (bool)
    {

        return keccak256(abi.encodePacked(one)) == keccak256(abi.encodePacked(two));

    }


}