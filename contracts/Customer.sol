//solium-disable linebreak-style
pragma solidity ^0.5.0;
//pragma experimental ABIEncoderV2;

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

    function login(string memory _passwordHash) public view returns (string memory, string memory) {
        if (compareStrings(_passwordHash, Users[msg.sender].passwordHash)) {
            return (Users[msg.sender].username,Users[msg.sender].name);
        }

    }

    function getUserCount() public view returns (uint) {
        return count;
    }

    function compareStrings(string memory one, string memory two)
    public
    pure
    returns (bool)
    {

        return keccak256(abi.encodePacked(one)) == keccak256(abi.encodePacked(two));

    }


}