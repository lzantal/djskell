DJSkell
=======

Django Skeleton project template for Django 2.0+

## Usage

```
django-admin startproject --template=https://github.com/lzantal/djskell/archive/master.zip -n aenv,pdep new_project_name
```

Above will use DJSkell tempalte to create a new django project. It also has two additional shell files.
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
aenv helps activating the project's virtualenv. It expects the virtualenv to live next to the project with the same name as the project and the '-env'.
Eg: if you named your project djproj then the virtualenv anem should be djproj-env

Usage
```
. aenv
```

### pdep
pdep helps with pulling, updating your project from a git repo and running the usual migrate, collect static and restarting the webserver.
To see available options run
```
. pdep
```
