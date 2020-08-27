<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% int a,b,c;
a=Integer.parseInt(request.getParameter("t1"));
b = Integer.parseInt(request.getParameter("t2"));
c = a+b;
%>

<h1> Add is = <%=c%></h1>
</body>
</html>
