DJSkell
=======

Django Skeleton project template for Django 2.0+  
Includes bootstrap 4, jQuery 3, fontawesome, pre-configured settings.py for project layout. Main base.html template coded for bootstrap 4 and ready to be extended for your apps.

## Usage

```
django-admin startproject --template=https://github.com/lzantal/djskell/archive/master.zip -n aenv,pdep new_project_name
```
**Note:** If you are on Mac and using 3.6 read below on how to fix SSL issue

Above will use DJSkell template to create a new django project. It also has two additional shell files.
- aenv
- pdep

```
- djproj
 |- aenv
 |- pdep
 |- djproj
 ...
```

### aenv
Helper script to activate the project's virtualenv. If the virtualenv doesnt exists yet it will ask you to create it. 
It expects the virtualenv to live next to the project with the same name as the project and the '-env'.
Eg: if you named your project djproj then the virtualenv name should be djproj-env
If you have your virtualenv located anywhere else just open aenv and update the 'envdir' variable.
Usage
```
$ . aenv
```

### pdep
Helper script for pulling, updating your project from a git repo and running the usual migrate, collect static and restarting the webserver.
To see available options run
```
$ . pdep
```

## Fix Mac SSL error
On mac with Python 3.6 you will receive an error similar to this
```
urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:777)
```
To fix this you need to use Finder and browse to your Python 3.6 folder and double click "Install Certificates.command" file.
You can read more about this [here.](https://stackoverflow.com/questions/42098126/mac-osx-python-ssl-sslerror-ssl-certificate-verify-failed-certificate-verify)

