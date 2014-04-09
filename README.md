A File Opener Plugin for Cordova
==========================
This plugin will open a file on your device file system with its default application.

Changed iOS-part: 
	
	NSURL *fileURL  = [NSURL URLWithString:path]; 

to

	NSURL *fileURL  = [NSURL fileURLWithPath:path]; 

In Cordova 3.4.0 (and above) use entry.toNativeURL() for first parameter.
Hint: http://stackoverflow.com/questions/21756274/phonegap-ios-why-when-i-get-the-full-path-of-the-filesystem-in-a-device-or-s
	

Requirements
-------------
- Android 4+ / iOS 6+
- Cordova 3.0 or higher

Installation
-------------
    cordova plugin add [url-of-the-git-repo]

Usage
------
Open an APK install dialog:
    
    <script>
        cordova.plugins.fileOpener2.open(
            '/sdcard/Download/gmail.apk', 
            'application/vnd.android.package-archive'
        );
    </script>
    
Open a PDF document with the default PDF reader and optional callback object:

    <script>
        cordova.plugins.fileOpener2.open(
    	    '/sdcard/Download/starwars.pdf', 
    	    'application/pdf', 
    	    { 
    		    error : function(errorObj) { 
    			    alert('Error status: ' + errorObj.status + ' - Error message: ' + errorObj.message); 
    		    },
    		    success : function () {
    			    alert('file opened successfully'); 				
    		    }
    	    }
        );
    </script>
    
__Please Note that for properly opening a PDF file, you must already have a PDF reader (Acrobat Reader, Foxit Mobile PDF, etc. ) installed on your mobile device. Otherwise this will not work.__

