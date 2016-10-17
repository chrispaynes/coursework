/* *original source code courtesy of:
  "https://blog.golang.org/defer-panic-and-recover"

  CopyFile opens two files and copies the contents of one file to the other.
*/

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

func CopyFile(dstName, srcName string) (written int64, err error) {
    src, err := os.Open(srcName)
    if err != nil {
        return
    }

    dst, err := os.Create(dstName)
    if err != nil {
        return
    }

    written, err = io.Copy(dst, src)
    dst.Close()
    src.Close()
    return
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

  /*
  The above func() works but if os.Create() fails,
  the func will return without closing the source file.

  Use: defer src.Close() and defer dst.Close()

  Defer statements allow us to close each file right
  after opening it, guaranteeing that, regardless of the number of
  return statements in the function, the files will be closed.
  */

func CopyFile(dstName, srcName string) (written int64, err error) {
    src, err := os.Open(srcName)
    if err != nil {
        return
    }
    defer src.Close()

    dst, err := os.Create(dstName)
    if err != nil {
        return
    }
    defer dst.Close()

    return io.Copy(dst, src)
}
