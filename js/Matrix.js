window.onload = matrixCalculation;


function matrixCalculation(){

  var mat = [
    [ 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4],
    [1, 1, 1, 2, 3, 4],
    [4, 3, 2, 1, 1, 1 ],
    [5, 6, 7, 8, 9, 0]
  ];

  var sum = 0, count = 0;
  //Display the initial matrix
  createTabularMatrix(mat, count);

  while(mat.length > 1)
  {
    //Find the sum of first row
    sum += mat[0].reduce(function(total, num){
      return (total + num);
    });

    //Delete the first row
    mat = deleteRow(mat, 0);

    //Delete the last row
    mat = deleteRow(mat, (mat.length - 1));

    tempMat = [[]];

    //Rotate the matrix counter-clockwise
      for(var i = mat[0].length - 1; i >= 0 ; i--)
      {
        tempMat[mat[0].length - i - 1] = [];
        for(var j = 0; j < mat.length; j++)
        {
          tempMat[mat[0].length - i - 1][j] = mat[j][i]
        }
      }


    mat = tempMat;

  createTabularMatrix(mat, ++count);
  }//End:while

  var txt = document.createTextNode("The sum is " + sum);
   document.body.appendChild(txt);
}//End:matrixCalculation



//Function to display matrix in a tabular format
function createTabularMatrix(m, tabCount){

  var tab =  '<table><tbody>'
  for(var i = 0; i < m.length; i++)
  {
    tab += "<tr>";
    for(var j = 0; j < m[i].length; j++)
    {
      tab += "<td>" + m[i][j] + "</td>";
    }

    tab += "</tr>";

  }

  tab += "</table></tbody>";

  addTable(tab, tabCount);

}//End:displayTabularMatrix



//function to add the tabular matrix in the HTML
function addTable(content, tabCount){

  var currentDiv;
  var  newDiv = document.createElement('div');
  newDiv.id = 'Table' + tabCount
  newDiv.innerHTML = content;
  if(tabCount == 0)
  {
    currentDiv = document.getElementById('main');
  }else {
    currentDiv = document.getElementById('Table' + (tabCount-1));
  }

  document.body.insertBefore(newDiv, currentDiv.nextSibling);
  document.body.insertBefore(document.createElement('br'), currentDiv.nextSibling);
}//End:addTable


//function to delete the specified row of the matrixCalculation
function deleteRow(mat, rIndex)
{
  mat.splice(rIndex, 1);
  return mat;
}//End:deleteRow
