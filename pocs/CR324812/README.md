<b>VULNERABILITY DETAILS</b>
When passing callbacks between contexts (iframes) and detaching an iframe, the callback gets access to the raw global object (i.e. without the security checks enabled on it)


<b>VERSION</b>
Since eva.

<b>REPRODUCTION CASE</b>
See http/tests/security/naked-global-object.html