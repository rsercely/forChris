'Browser("(99+) Feed | LinkedIn").Dialog("Message from webpage").WinButton("OK").Click @@ hightlight id_;_5834444_;_script infofile_;_ZIP::ssf405.xml_;_
'For xxx = 1 To 3 Step 1
'	if Browser("(99+) Feed | LinkedIn").InsightObject("Delete Existing Portlet").Exist (3) then @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf407.xml_;_
'		Browser("(99+) Feed | LinkedIn").InsightObject("Delete Existing Portlet").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf407.xml_;_
'	else
'		Exit for
'	end if
'Next
'Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer_2").WebButton("addPortletButtonLabel").Click @@ hightlight id_;_Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer 2").WebButton("addPortletButtonLabel")_;_script infofile_;_ZIP::ssf399.xml_;_
'Browser("Manage pages").InsightObject("Add Portlets -> Portlet Name").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf406.xml_;_
'Browser("Add Portlets").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Click @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebEdit("PortletSearchTree.namePattern")_;_script infofile_;_ZIP::ssf400.xml_;_
'Browser("Add Portlets").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Set "self" @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebEdit("PortletSearchTree.namePattern")_;_script infofile_;_ZIP::ssf400.xml_;_
'Browser("Add Portlets").Page("Add Portlets").WebButton("findPortletsLabel").Click @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebButton("findPortletsLabel")_;_script infofile_;_ZIP::ssf401.xml_;_
'Browser("Add Portlets").Page("Add Portlets").WebCheckBox("ch_0").Set "ON" @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebCheckBox("ch 0")_;_script infofile_;_ZIP::ssf402.xml_;_
'Browser("Add Portlets").Page("Add Portlets").WebButton("addPortletsWindoidButtonLabel").Click @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebButton("addPortletsWindoidButtonLabel")_;_script infofile_;_ZIP::ssf403.xml_;_
'
'foo = 1
'

'until no more browsers exist
While Browser("creationtime:=0").Exist(0)
	'Close all IE browsers
	Browser("creationtime:=0","version:=internet explorer 11").highlight
	Browser("creationtime:=0","version:=internet explorer 11").close
	'Wait 5
Wend

 
SystemUtil.Run "iexplore.exe", "http://ppmdemo:8084/itg/dashboard/app/portal/PageView.jsp"
Browser("Manage pages").Page("PPM Logon_2").WebEdit("USERNAME").Set "admin" @@ script infofile_;_ZIP::ssf326.xml_;_
Browser("Manage pages").Page("PPM Logon_2").WebEdit("PASSWORD").Set "mfDemo$20" @@ script infofile_;_ZIP::ssf327.xml_;_
Browser("Manage pages").Page("PPM Logon_2").WebButton("Submit Query").Click @@ script infofile_;_ZIP::ssf328.xml_;_

 @@ script infofile_;_ZIP::ssf285.xml_;_


' Navigate to personalize Dashboard
Browser("Manage pages").Page("PPM Logon_2").Link("DASHBOARD").Click @@ script infofile_;_ZIP::ssf329.xml_;_
Browser("Manage pages").Page("PPM Logon_2").Link("Personalize Dashboard").Click @@ script infofile_;_ZIP::ssf330.xml_;_
 
' Add New Portlet page
Browser("Manage pages").Page("PPM Logon_2").Link("DASHBOARD").Click @@ script infofile_;_ZIP::ssf335.xml_;_
Browser("Manage pages").Page("PPM Logon_2").Link("Personalize Dashboard_2").Click @@ script infofile_;_ZIP::ssf336.xml_;_


Browser("(99+) Feed | LinkedIn").Page("Manage pages").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf356.xml_;_
Browser("(99+) Feed | LinkedIn").Page("Manage pages").WebElement("New PageNew Page").Click @@ script infofile_;_ZIP::ssf357.xml_;_
Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer").WebEdit("WebEdit").Set "New Page" @@ script infofile_;_ZIP::ssf358.xml_;_
Browser("Manage pages").Page("Manage pages").WebElement("New PageNew Page").Click @@ script infofile_;_ZIP::ssf332.xml_;_
'Wait 1
'Window("Google Chrome").Type  micReturn 
Browser("Manage pages").Page("Manage pages").Frame("editorContainer").WebEdit("WebEdit").Set "Self-Service Portlet(SSP) Demo"
'AIUtil("text_box", "Page Name").Type "Self-Service Portlet(SSP) Demo"
'Window("Google Chrome").Type  micReturn @@ script infofile_;_ZIP::ssf334.xml_;_


'Window("Google Chrome").Type  micBack @@ hightlight id_;_1313840_;_script infofile_;_ZIP::ssf359.xml_;_
'Window("Google Chrome").Type "Self0" @@ hightlight id_;_1313840_;_script infofile_;_ZIP::ssf360.xml_;_
'Window("Google Chrome").Type  micBack @@ hightlight id_;_1313840_;_script infofile_;_ZIP::ssf361.xml_;_
'Window("Google Chrome").Type "-Service Portlet(SSP) Demo" @@ hightlight id_;_1313840_;_script infofile_;_ZIP::ssf362.xml_;_




'Move to the top
Browser("Manage pages").Page("Manage pages").WebElement("Self-Service Portlet(SSP)").Click @@ script infofile_;_ZIP::ssf337.xml_;_
Browser("Manage pages").Page("Manage pages").Frame("editorContainer").WebEdit("WebEdit").Set "Self-Service Portlet(SSP) Demo" @@ script infofile_;_ZIP::ssf338.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf339.xml_;_

Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf340.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf341.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf342.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf343.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf344.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf345.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf346.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf347.xml_;_
Browser("Manage pages").Page("Manage pages").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf348.xml_;_
'Browser("Manage pages").Page("Manage pages").WebButton("WebButton").Click

 
 
'Add Self-Service Portlet

'Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer").WebButton("addPortletButtonLabel").Click @@ script infofile_;_ZIP::ssf363.xml_;_
'wait 2
'Browser("Manage pages").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Set "self" @@ script infofile_;_ZIP::ssf364.xml_;_


 @@ hightlight id_;_35_;_script infofile_;_ZIP::ssf376.xml_;_
 @@ hightlight id_;_1313130_;_script infofile_;_ZIP::ssf384.xml_;_
'Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer").WebButton("addPortletButtonLabel").Click @@ script infofile_;_ZIP::ssf385.xml_;_
'Browser("Manage pages").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Set "self" @@ script infofile_;_ZIP::ssf386.xml_;_
'Browser("Manage pages").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Submit @@ script infofile_;_ZIP::ssf387.xml_;_
'Browser("Manage pages").Page("Add Portlets").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf388.xml_;_

'AIUtil.SetContext Browser("creationtime:=1")

For xxx = 1 To 3 Step 1
	if Browser("(99+) Feed | LinkedIn").InsightObject("Delete Existing Portlet").Exist (3) then @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf407.xml_;_
		Browser("(99+) Feed | LinkedIn").InsightObject("Delete Existing Portlet").Click
		Browser("(99+) Feed | LinkedIn").Dialog("Message from webpage").WinButton("Ok to Delete Portal").Click
	else
		Exit for
	end if
Next
Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer_2").WebButton("addPortletButtonLabel").Click @@ hightlight id_;_Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer 2").WebButton("addPortletButtonLabel")_;_script infofile_;_ZIP::ssf399.xml_;_
Browser("Add Portlets").Maximize ' need this to bring it on tope
Browser("Add Portlets").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Click @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebEdit("PortletSearchTree.namePattern")_;_script infofile_;_ZIP::ssf400.xml_;_
Browser("Add Portlets").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Set "self" @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebEdit("PortletSearchTree.namePattern")_;_script infofile_;_ZIP::ssf400.xml_;_
Browser("Add Portlets").Page("Add Portlets").WebButton("findPortletsLabel").Click @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebButton("findPortletsLabel")_;_script infofile_;_ZIP::ssf401.xml_;_
Browser("Add Portlets").Page("Add Portlets").WebCheckBox("WebCheckBox").Set "ON" @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebCheckBox("ch 0")_;_script infofile_;_ZIP::ssf402.xml_;_
Browser("Add Portlets").Page("Add Portlets").WebButton("addPortletsWindoidButtonLabel").Click @@ hightlight id_;_Browser("Manage pages").Page("Add Portlets 2").WebButton("addPortletsWindoidButtonLabel")_;_script infofile_;_ZIP::ssf403.xml_;_

foo = 1



'Window("Google Chrome_2").RunAnalog "Track1"
'AIUtil.SetContext Browser("creationtime:=0")
'AIUtil("text_box", "Portlet Name").Type "self"
''Browser("Manage pages").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Set "self" @@ script infofile_;_ZIP::ssf393.xml_;_
'Browser("Manage pages").Page("Add Portlets").WebButton("findPortletsLabel").Click @@ script infofile_;_ZIP::ssf394.xml_;_
'Browser("Manage pages").Page("Add Portlets").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf395.xml_;_
'Browser("Manage pages").Page("Add Portlets").WebButton("addPortletsWindoidButtonLabel").Click @@ script infofile_;_ZIP::ssf396.xml_;_
'Browser("Manage pages").Page("Add Portlets").Sync
'Browser("Manage pages").Close @@ hightlight id_;_2951122_;_script infofile_;_ZIP::ssf397.xml_;_
'Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer").Image("width_increase").Click @@ script infofile_;_ZIP::ssf398.xml_;_

 @@ script infofile_;_ZIP::ssf389.xml_;_
Browser("Manage pages").Page("Add Portlets").Sync
Browser("Manage pages").Close @@ hightlight id_;_1313130_;_script infofile_;_ZIP::ssf390.xml_;_
Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer").Image("width_increase").Click @@ script infofile_;_ZIP::ssf391.xml_;_



 @@ script infofile_;_ZIP::ssf369.xml_;_
'Browser("(99+) Feed | LinkedIn").Page("Manage pages").Frame("editorContainer").Image("fun_edit").Click @@ script infofile_;_ZIP::ssf370.xml_;_
'Browser("Manage pages").Page("Manage pages").Frame("editorContainer").WebButton("addPortletButtonLabel").Click @@ script infofile_;_ZIP::ssf349.xml_;_
'wait 1
'Browser("PPM Logon").Page("Add Portlets").WebEdit("PortletSearchTree.namePattern").Set "self" @@ script infofile_;_ZIP::ssf350.xml_;_
'Browser("PPM Logon").Page("Add Portlets").WebButton("findPortletsLabel").Click @@ script infofile_;_ZIP::ssf351.xml_;_
'Browser("PPM Logon").Page("Add Portlets").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf352.xml_;_
'Browser("PPM Logon").Page("Add Portlets").WebButton("addPortletsWindoidButtonLabel").Click @@ script infofile_;_ZIP::ssf353.xml_;_
'Browser("PPM Logon").Page("Add Portlets").Sync
'Browser("PPM Logon").Close @@ hightlight id_;_2491394_;_script infofile_;_ZIP::ssf354.xml_;_
'Browser("Manage pages").Page("Manage pages").Frame("editorContainer").Image("width_increase").Click @@ script infofile_;_ZIP::ssf355.xml_;_



 
'Browser("Manage pages_2").Page("Manage pages").Sync
'Browser("Manage pages_2").Forward @@ hightlight id_;_198702_;_script infofile_;_ZIP::ssf286.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer").Image("fun_edit").Click @@ script infofile_;_ZIP::ssf287.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("var cancelUrl = '/itg/dashboar").Click @@ script infofile_;_ZIP::ssf288.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("Self-Service Portlet").Click @@ script infofile_;_ZIP::ssf289.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf290.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("Enter the portlet title").Set "Gauge Diagram Global Control Phase I" @@ script infofile_;_ZIP::ssf291.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("Financial Costs").Click @@ script infofile_;_ZIP::ssf292.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebList("Financial CostsPortfolio").Select "Financial Costs" @@ script infofile_;_ZIP::ssf293.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf294.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("WebElement_3").Click @@ script infofile_;_ZIP::ssf295.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("Manage ViewsGauge Diagram").Click @@ script infofile_;_ZIP::ssf296.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit").Set "0" @@ script infofile_;_ZIP::ssf297.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit_2").Set "2000000" @@ script infofile_;_ZIP::ssf298.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("Manage ViewsGauge Diagram_2").Click @@ script infofile_;_ZIP::ssf299.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebRadioGroup("WebRadioGroup").Select "#0" @@ script infofile_;_ZIP::ssf300.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebButton("Add Color").Click @@ script infofile_;_ZIP::ssf301.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit_3").Set "0" @@ script infofile_;_ZIP::ssf302.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit_4").Set "1500000" @@ script infofile_;_ZIP::ssf303.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit_5").Set "#477a38" @@ script infofile_;_ZIP::ssf304.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebButton("Add Color").Click @@ script infofile_;_ZIP::ssf305.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit_6").Set "1700000" @@ script infofile_;_ZIP::ssf306.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit_7").Set "#9f4d09" @@ script infofile_;_ZIP::ssf307.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebButton("Add Color").Click @@ script infofile_;_ZIP::ssf308.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit_8").Set "2000000" @@ script infofile_;_ZIP::ssf309.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebEdit("WebEdit_9").Set "#e70808" @@ script infofile_;_ZIP::ssf310.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("WebElement_4").Click @@ script infofile_;_ZIP::ssf311.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("WebElement_5").Click @@ script infofile_;_ZIP::ssf312.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("ng-acl-dialog-frame").WebEdit("CULL_TEXT").Set "Global Control" @@ script infofile_;_ZIP::ssf313.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("ng-acl-dialog-frame").WebButton("filterPanelFindButton").Click @@ script infofile_;_ZIP::ssf314.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("availFrame").WebElement("Global Control Phase 1").Click @@ script infofile_;_ZIP::ssf315.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf316.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebButton("Quarter").Click @@ script infofile_;_ZIP::ssf317.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf318.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebButton("0").Click @@ script infofile_;_ZIP::ssf319.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf320.xml_;_
Browser("Manage pages_2").Page("Manage pages").Frame("editorContainer_2").WebButton("Save").Click @@ script infofile_;_ZIP::ssf321.xml_;_
Browser("Manage pages_2").Page("Manage pages").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf322.xml_;_
 @@ hightlight id_;_198702_;_script infofile_;_ZIP::ssf281.xml_;_
