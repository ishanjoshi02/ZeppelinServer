pragma solidity ^0.5.0;

contract ResponseChain {
    
    struct Response {
        uint qid;
        uint rid;
        string response;
    }
    Response[] Responses;

    event responseSent(uint qid, uint rid, string result);

    function sendResponse(uint _qid, uint _rid, string memory _response) public {
        Response memory newResponse;
        newResponse.qid = _qid;
        newResponse.rid = _rid;
        newResponse.response = _response;
        Responses.push(newResponse);
        emit responseSent(_qid, _rid, _response);
    }

}