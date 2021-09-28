import React, { useState, useEffect, useContext } from 'react';
import Header from '../Cart/CartNavbar';
import './product.css';
import img from '../../Images/Product/12.png';
import img2 from '../../Images/Product/13.png';
import Footer from '../Footer/MainFooter';
import Item from './item';
import axios from 'axios';
import AuthContext from '../../store/AuthContext';

const baseUrl = 'http://localhost:5000/api/product';
function Product() {
  const [product, setProduct] = useState({});
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const getProd = async () => {
      const prod = await axios({
        method: 'GET',
        url: `${baseUrl}/${authCtx.id}`,
        withCredentials: true,
      });
      setProduct(prod.data.data);
    };
    getProd();
  }, [authCtx.id]);
  console.log(product);
  return (
    <div className="product">
      <Header />
      <div className="productpg center ">
        <img src={img} className="responsive-img" id="product_fimg" />
        <div className="row productr ">
          <div className="col l3 m12 s12">
            <div className="container white " id="prod_cont">
              <img src={product.img} className="responsive-img" />
            </div>
            <a className="btn center" id="padding_zero2">
              {' '}
              Add to cart
            </a>
          </div>
          <div className="col l8 m12 s12 ">
            <p className="black-text">{product.name}</p>
            <div className=" right hide-on-med-and-down" id="shareproduct">
              <span className="grey-text right">
                Share<i className="material-icons ">share</i>
              </span>
            </div>
            <p className="black-text" id="pr_price">
              Rs {product.price}
              <span className="grey-text">
                <strike>Rs 150</strike>
              </span>
              <span className="green-text" id="prod_disc">
                34% off
              </span>
            </p>
            <span className="black-text left" id="padding_zero1">
              Available Offers
            </span>
            <br />
            <ul>
              <li className="listprod">
                <span className="black-text left" id="padding_zero">
                  <i className="tiny    material-icons">link</i> &nbsp; Bank
                  Offer10% off on Citi Credit and Debit Cards, up to ₹300. On
                  orders of ₹2000 and above. <a>T&C</a>{' '}
                </span>
              </li>
              <li className="listprod">
                <span className="black-text left" id="padding_zero">
                  <i className="tiny    material-icons">link</i> &nbsp; Bank
                  Offer10% off on Citi Credit and Debit Cards, up to ₹300. On
                  orders of ₹2000 and above. <a>T&C</a>{' '}
                </span>
              </li>
              <li className="listprod">
                <span className="black-text left" id="padding_zero">
                  <i className="tiny    material-icons">link</i> &nbsp; Bank
                  Offer10% off on Citi Credit and Debit Cards, up to ₹300. On
                  orders of ₹2000 and above. <a>T&C</a>{' '}
                </span>
              </li>
            </ul>
            <span className=" left specs_prod_hd" id="padding_zero1">
              Specifications
            </span>

            <table className=" responsive-table highlight" id="prod_table">
              <thead>
                <tr>
                  <th>Category</th>
                  <td>{product.categ}</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Rating</th>
                  <td>{product.rating}/5</td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>{product.quant}kg</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <th>Container Type</th>
                  <td>{product.contType}</td>
                </tr>
                <tr>
                  <th>Expiry</th>
                  <td>{product.exp} years</td>
                </tr>
              </tbody>
            </table>

            <br />
          </div>
        </div>
        <div className="white card row z-depth-1" id="pdt_bt">
          <p className="black-text" id="pdt_bt_head">
            Similar Items
          </p>
          <Item
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxZ9MaxthdxNTdb-FjD-qfpT_0JApnnGcEvKG2jivOKoPH7uQ081f4plHi63qdtj5l2U&usqp=CAU"
            name="Ashirwaad aata"
          />
          <Item
            src="https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/flipkart-grocery-breakfast-items-corn-flakes-chocos-offer-discount-1529314833.jpg"
            name="Kellog's Corn Flakes"
          />
          <Item
            src="https://diginamaste.com/wp-content/uploads/2021/05/grocery_flour_fortune_besan-1.png"
            name="Fortune Besan"
          />
          <Item
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6OCjpS_pyReuFpkY8e4ouqPn_z0_JoR6W3GNlxWtbA-GmzCp7V680PjCf6CgoK8gGUg&usqp=CAU"
            name="Nestle Maggi"
          />
        </div>
        <br />
        <div className="white card row z-depth-1" id="pdt_bt">
          <p className="black-text" id="pdt_bt_head">
            Bought Together
          </p>
          <Item
            src="https://images-eu.ssl-images-amazon.com/images/I/61n1hm72dlL._AC_UL200_SR200,200_.jpg"
            name="Tata Salt"
          />
          <Item
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0rUt9wldtHyXENTdDgkPn0Wz-uVrMBJG34gZ8kUH_LqLLxhhA1aqMv8LDMpGwYsr4FI&usqp=CAU"
            name="Red Label Tea"
          />
          <Item
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeY2dPl67CB-buTI3o0WUy4TKCQ4sUoegZZww11pCtDqXxqfUC_6x2RAQHIFpSIoeX4E&usqp=CAU"
            name="Doritos"
          />

          <Item
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBgVFRQYGRgaGx0eGxgbGxobGxkgGxgbGRsbGxsbIi0kIx0pIhoaJjcmKS4wNDQ0GyM5PzkyPi0yNDABCwsLEA8QHhISHjUpJCs1OzI2NDI7MjYyMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCAQj/xABHEAACAQIDBQQGBwUGBAcAAAABAgADEQQSIQUGEzFBIlFhkQcUYnGBoSMyQlKSwdEWU3Kx4RUXJEOTojOCwvA0NVRzg7Kz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EAC4RAAICAQMCBgIBBAMBAAAAAAABAhEDBBIhBTETFCJBUXEyYaEzUoHBI0KxFf/aAAwDAQACEQMRAD8AuaIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiJ8gGN6qiwJGvLXnOVV2/SDugIJQ2bUDW18uvWcPfDBVK2Jw9NHKkhzcC+QLbtX6Xvb4ST4bAIlPIqjLax8e8nvJkbbbRRunJtLijNhMUtRFdeTC4mxOFu4gp8WgDpTc5R3K/bUeTW+E7s9XKLISbVs+xET0mIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiaG1saaNPOFDG4ABNufjAN6Jy6e1CQCUsSB1mdMeD0tPNyPaN2Y6lQKCSbAC5PdaeBiB3Tl7QxPEqrQUXH1qh7l6L/zH5RZCTpGfZtLMxrsO04AW/NUGqj3m5J9/hOnMS1V5XtPecd8CMaRw8CSuNrjoyoR71UA/IzvCcHEkJike+jso+ORwf8Ap8p3M47xPEyGLi1+zJExGsvfMb4tRzki02YnwGfYAiIgCIiAIiIAiIgCIiAfIvNDbO00wtF69QMVQXYKLm3gJD/71sDa+Svb/wBv+sshinNXFWeOSXcn8Sv/AO9nA/cr/wCn/WfB6WsB92v+AfrJeWy/2s83IsGJXh9Luz+6t+AfrPo9LeAPJa/4P6x5fJ/aNyLCnG3kW9IDpnUk2Jtz52kX/vZwP3K/+n/Wa+P9J2Dq03polbMykLdLDNbs6301trPHpstfiwpxRIPWqd7Z1uOlxMorr94ecgWC32quoHq9Hl1zt5zep70VSL8CgPcH/MzA8iXcqlr8SdWTmjiByuJr7IwZoh89UVHdyzOQFJFzlWw7gbfCRBd6K37uj5N+s+ftFV58Oj5N+s88aJU9fibJ+2trd8yK0ratt6rYkU8x7qauxHjz8Zlw28zZBlpUxyF2Vwb2vY5jzkvFRd5lbd1Ovomu1ME9RqRSoqcOoHa4vnABGUa6HXnN1iB1HykCO8FXpTo/g/rPn7R4jupf6Y/WeePFGb/6GFP3J6aijmw8xNfEVUIsGB90hH7T4ocuF+AfrNjZu8WJq1qdJjTyu9j2LaWLG2vM2t8Z6s0W6RKHUMUmkrLCwbXRfdNieEFhae5pNoiIgCIiAIiIAiIgCIiARr0gW/s7EX5cMz8+MeyJf/pDW+zq4vzUDzYCUCUHU2+E+g6R/Tl9mTP3MQAuLmwuAT3AkAn4DWfoTZO6GzkpIFw9NxlBzkBi2n1ix5kz8+ql52sPtWvQp8OliKqr0AdgB7h0Hul2s0k8yW2VUeY8ij3Rev7LYH/0lH8Czh737p7P9UrOaNOmyU3ZaigIysqkrqOeoGnWU4+3MWx1xdf/AFG/WYsRjatRctStUdfuu7MPIm0yQ6ZmTT3/APpPxo/BoU2NhfnNnoGHfMNpkorchb8zOu16aKHyTihg6eGp06tQM6VXCuQSvDDKrEgBfE89NOckmxdi4atTSoBVUOXKIzjOyrYFgB9m/d4SIYDZ+IxIIFDEujAAPnyhexl7ABAI0GhPxkpwWzMei0stOoXp0xTDu1MEITdrKrcyNBcnkJ8DqcVzl9mjwcVcxOxQ3YoNzp1l/iYiYds7uJTpMaVOo76WCsGIBOpszAH3TfBxhtnwasVFg5qgE69VvppbqZwsVs/GUaLZVdMzAMVdGOU3HN7m+tr+AlEcKT5snDBi3KoiliMRQQ3ouhY2Vn4KFmFgP8zXS2gnK3jwOK4Du1J04YaqpzUst1uQcqm5Ambd9DU2phhVY1OHQrWDlHykFRdcoAB15zBv3iaiPiEWq+QI1lLDKujZ0HY0uGGl+U17FRt73Gjfo43AGpRpuGDOiMxJcKjugZUYgkXN/cJuYangKhrDLUQUmZWLMbNlNrplJNjzH8pxsBujjnRKi1UCOiNlzakFBbW3dpOjgtkVUrmni6mZFTiBL3V2LFVzWHQDl4zDlhtTlRijgxSlW02DT2cWUC5DLcvn0Q6dhlJzXtc8ukxbNqbNauhp1HDrUUKDnUM3cMw5a9bTpbbp5lRKeGWojHtMFUFbEDKhuCrdQ3IWnD2PsjF8ZWJL0RXAuWXN2H0J8eV++3jKsHrkuKZOWmxQ5UUWqJB/SDtfF0XoJhmy5xULkKGPZyBefvMnBM423dgJiwuapUQrezU2ynXvndxtJ3Lsevtwcz0f7SxNejUOJbM61SqmwXs5EYcvEtJbOXsbZKYWnw0d3u2Ys7ZmJsBz+Am4cSgbKXUNa+UkXtyvbnaJNNtoRTo2YnwGfZE9EREAREwtXQGxZQe4kA+UAzRPOaIBEvSVXyYJvaYD5MfylB1W156S5vS9ibUaVP7zMfwgD/qkI9HWzFq1MRVZEYUkATiC6B3zG59wX5zs6bMsGleR/JmlDfkoiNOuo+0PMTzWxSn7Q85btGgDmY1NmgXugCL9XXRiwtmF1jbjUaNOhUZMPZ6ZLvTorUpki3bU5gQo+ItPIdW3tRSJPTpe5TnHH3hHHH3h5y8sHTwtSnVNOnRd6SLmbgqFzE20VraHKwteecNTT1bEOcJTzojsjtSppTLAEKvZYnnzvaSl1GSdUFhXyUfxl+8POZcPUBOhBlr7kY5cVWq062EwhCU0cCkisS2fK3M8utvnOJ6WjRp4mjRo00TKhdsqhTdjZb28AZOGtcp7GjyWJJEkC4z+zkTBhrZX7SuFq3B7CqGFgDfUyU7unFmgvrqoKw0ORs1x0LdM3fbSc7cZr4Kl7j+UkQnCy/nL7NEVRqbZ2pSwlF69YkImXMVBY9pgo0HiRK/3o9IVJ14dDD1qiplaoxLUiliCgYFD2T42kg9Kf/lWJ/8Ai/8A2SVVTr12Z3VlWpVSlUyqrsQtNOzrbKcw5g3kGXQOvsre1lxKV6eAqPURGABrErkf7VuHy7ph2rvNxXrmrgqqs4vUX1hlVQbLcDJoDYC80mq1noPiGopw2pohprnUimjC1RbclzdL8r9Jjr1vo1KvTKVkFFFtWJASqHN2brmc6npykS9JXZYOxvSTQp4ZONh6tMBSKeX6RWSnZMwcgXI5HSSvbezzWyVqYzOq2ylshZHs1g3RgdRfTmOspTefEVERqFRqLC4CoikcPIMoysD3aWbneX/gz9Gn8Cf/AFEjOClFxfuU5IqLtEXbBswyJhq+fvdiiL7TPfUD2b36Tt4bCClTo0wb5XF25ZmJJY+686U1cV9ZP41leHTRxcr+SDk5dzpsdbTJMY5zJNZWfDK69KWyRUGHrBghV8jPexCuCdOpNwAAPvSxZxt5NmrWppmF+HUSoB35TqPImQn+LLcE9k1Iim7uDxFKkavHrdpkREZ86qugLEN1PPwkhrYrEA1wKl+GoK9gaki9iLa/CYBjVp0c7uqLxGJZiAPr/VA53tPeH2nTqivwqyOSgdVXmqkaE6TmvJP5L8lybnXBs0MVXL01L6PTLHsi4YW05ctZjobTqFEZ6iKS7KcwsDa9gD0OhPwmxSB4lHn/AMM3+U4+19pVKBorpwn4gc9gMrLmIIap2ddAAb85bhnOT5fBUlbpI6eJx/ZbLi6YK6sSFUAfxcpqPRCVSO03EYoMwzAEhfrf7tTNbZ+Nok3NSs2cUjkqrSAPGHY0yg+U7C1CaqZlyszAZe/ItRs1un2flNbhck7K3JcpHW9WT7oiZrRLaIFXel6izGkR9UIxPvLoPzkI2HvTWwVN6dOlSdXYl84Yk3XLbQ8rCT/0rY1U4dM/bQn8NSmZWbtTbmSPhefQ6THDJpUprgyTk1Pg6P7bVMuT1LB5b3twzzta/Pnawnwb41qgRBgsK+QZEUU2OVSQcoF9BcDTwm5s7dSnbPWcW7Vk1BuqhhmPuM6dWnSBVKbcJMxLNSsH0GRQD5mY5wwwl6FydDBpck1uk6R42LX2n9Lw8BhlFW3EVycrZb2AUsQBcnSb20H2yMO1D+z8MaLAhqdLs6NqbZWFjfXSc5sLQXVcbiyRewDWJty1vpMtCmthm2liwdLgVHt0uL39+szyVyvaaPKRXaRwt1cXjcPVdsJs/wClVcrlhU7IvexDMF6Tjbw4vEV8S9TEqVqmwZCMoQAWCgd3j4y5d0sexUKa+ext9JcubO5zMw65SvOQffytRbFmzBmU1MxGtrtcAnw185fppXl/GjDnxuN2ya+j0n1Glfnr+UlQkW3AP+DS3LM1vlJSJzM39SX2SXY5m8mz6OIwz0cQ5Sm5QFgbG4cMoBI7xIFtX0f5LLhdpcNAHVlqMSRlIzAFeQFxf3iWVi8LTqpkqLmW4NteY5HSc3aOzqFOm7immljZi1rkLTJ588ul+srJXRV2O3ErUENRtoIyqrLlTPmIQWZFBNtAeUUN0MLwadRsfUUEkonDU5Tm7Vu1zuBy7pJt7uBTp8NaSgio3DdWJXXIXIubg9uzAaG04e2Uvg8OadV17LZ1RxTYuv2QxsApa5YXvyMjGVzp/Bqirw7l3s4e8Qo0KnCq+s4lXUOtQuKYa41sLMDbvvJHR9KVTsZcGAEXLY1jZhYAFuxz0nF3wqKcHg0dw+IuxcgaWy2JU9QSVuepUmY9lYTDpRd8TUemqMpIVf8AiKabEU0YgqKhYA3PQGdPBhxbHKa4OfknJuiUYP0qV6r8NcHSBsTdqzAac9ck8UfSZiKrHJgaZ4bG54xsSOinLqTK+3jwSUq7ohdkBBRnGVmRlDA8hfW4uBY5ZONz8TkwtGyDkhJBVCVFRsy365rC/faZtVGMKcezDyPb25Ozs/0g1MRTqO9AUiqtYLUa7OGVFQmwIBZhy7pK22s9HELh78TMiXJNhTcls2ZzfQqrMFNz2bdRITsVV9cUFFyuLlCARq+YC3W1h5S0HUKMq0xbnoosPh3zJjyblbNWWCio8d0cPD7151X6Bs7OyBcwsLJxFJY8syaiSFCXpjMMpZdVvexI5X6zxhgzAl1Ua6C3QDmfGbRl1pooK229s2rVw9F0QPwarlqRIGa91vrpcTFuTsqtxmrVEFNFo8PKWUltc2YgcgPGN96VjTQrUamMQ5dUDXIdc45dxPXxmXdSlhC9Xg4bECpwm0qKxRgfsgMQCT3GYJxTnR14zlHS18/wTuiqtkdSGAXRhYgj3zC2FU5lKo4JuUax1vcEA3seXykdTBuwUPTxOUa2KqL6ZLaPyAIIHszZVGOho4m/K5Wn0VQSTnJs2TX+KWqO13RzWl8nZoYM5szKGYHsllUZbXtYi+tiZ9XADjpU5squCepuR+sybJJ4S5lZDY3VrZhqdNCRMuGrZ2NuQv53/p85cpx4V8sq20bcREsBUnprFnwzdMtQfG6n8pCtkYZaYWtUF7g5EPUDRwfbsbgSe+lynnq4amRdbO7C4BIS2ik9TeQDEVzUPh4aXI5XH2XA08Z0lqHHAoI0aPTKcnOXsZMZtZz9ru+OmW/xW3lMey8HUxRftFVRGa9tGI1yg8r8zbuE52J1ZR428z/3pLi3X2BRfDslx2QVXWzK2U5nI7ySefSQi9kHN9/Yv1GX17fZdytq+69cKrKUYsAQoazG46A8/hOJnCPlqKwtzX6rfPlP0PQxFBqKq6KzBQpphQzZgLEAHxHPl4yObb3WrYm7th6A1uVzfSOo5JmUWB8bmW4+oJ8NGHw7b9VFRI1BtbsnO9215+C9RMOJWkq/RuS3xt43uJ1d4t2zRDVaQcIptUpv9eiTyJP2kPeJG7zbCn6kZZX2ZeO4GKAwqIRYaWY8tQND3SYiQzcjDf4NGve+hXoQALfGSWnUK8tQPsz57J+b+zUuxq7Z3ipYZsjAu9rsoIGUHv8Al5zY2ZtiliEzIdb2Km1/AjvBtzEge2s1LF1XeoFWqSCWA1RgCGpk6FhaxXwnb3WoCnd73Vkp06ZItmyZyXsT1L/KYHmnva9iTrhK79zx6QKxNNASLFxpbXn3zl7FoJwaQbthnqO2XMLBE+obW1BHWbm/bA00AIOVx/OYN0KSsg+8KpA0J+unyGnOVZZyUvT3OxhivKtv5/0QveTDKaijLndipqOA1qIK9inck9o3JNzfSSvZeJODWpUTBVHYCmr+rVKj5gyFlqmjUDBbEEAjlMPpLw1OlWwxp3zsHIUEKl1Iu7HmWNwJnwuIR6pq8XDlmRKZvUr4OqmVSQvbBVrg35dLid+CrTRT7nAySvK67EM3xpua9Y1GqM4fKTUILABFZVJUBftHQDrOnu5RRqCcRqmigZabC6LdyXKk3IuAPjOZvQQqOutxWe+apxW1VDcv9r3zpbOwmIXCJURGNNUBZhw9L8yFbtEC+pktZj3QjSvg16DJBTe918G7gXqCrSyM5YMAGXLmI1t9Y2lmK2Iy2KYi9wQw4QtzB+1yOhtK52c1sTT8HHyWXGuoB8JytMqTX7NvVK8RV8HMK1j9qvz7qQ6zb2fRddXqOwIFg4UMCOZOXTWbKNPamaTlkI314at28Y2HDMCCovnIUqQdOlpz9xse/rj0UxLYihwwxZh9Vs1rXt1E2PSFiqy18OiURUViSVKhgxHJLkdnS5v4To7pYjEF2R9nrh0y3zqU7RvyIExSX/JZ0r26fnm/rj/ZLXewnOr1iCWF9RymjXx7AnMoBB1H6TSxO10Avm0HPw8D7++cDXa+eV7IKqZTj08qs6mHxOpF+f5jSZtiPcOemaQ1NugVkQEZe8mzaXKi3xOskW5WO41J3AAGYCwIOuUX1Hvl3TIZfFTm+OSWowuEbaJNPs+RPpDCVb6X3ymjodVcHQFbZlNj1HvErdT1/rf49R79ZYXpkH0mGPLsv0IPNftcvhK8oC/QnxFv5r+Y7pdF8HX0nEEadd7MD4/yMundfF4WphlYIrNWYqo0zlvtBm5hQQde60pXEpz8DJr6N8aEF85vScOUFtab3Vm79CZslFTwqu6OdqPTld9mZEdsJiziKlU1DxKxo16blkcqjf4eqpIygW5DqPjJaN88U9ZKFKlRzO1MZmLgANh+M506jUAe6Q8bWw5qvUGCoqalUqL1KnZFRnRqpQEqDYamy/W6T3sfbNLD8J6eFoM5fMGFV2KDJkyNm0FTKbAXOltJS8fHYo5Z0NjbNrVMFSqrT4jVTW4hDE8RGdlAcudXBGltLCcH+7nEdzf7P1loboYni4KjUCKgbiEIuir9M9gJ2LT5TXda1OHM8cOyZ75fdzdFZYfZWOoIE4jIg5Hsc/PwniphsWxucW4PuWdHeHevCPVNIu/0ZtnQBkLHn1ubcvOalHE0XyEVm7d8l6L9uxsbWJ6y3Hmztbp92cfV5s0JNQdo5uL2Pials2KdgpBCkJa+uuomehgcYhutdz4ErpNqpiqS866fgf8ASadbbmFT/Mdv4U/VhJOeRmeOt1XZMyYzA4mqAHYaG4tlE626tOpQZqZFw/2gQbEaAW+Mi+I3upgWp0XY97uAPwqPznrYe89api6IJVENRcyqByvyLHWThGakpSNuDV638W/S32PHpPqVFx1BmFgKIy35XDHN+U6Wz8YjpUeu1NqP0aOKmHqVw1XISKn0djTWxtfrN/0wbL4mGTEpqaLkMRf6lQix+DATxuXg2GFFZcK4fgKQ+GxX0lfUaPTOgqAa637p9BDMvAUf2b5Y/XZXm8tNkq1KBRKeWoQES5Rbqv1SdcpuDr3yV4fFkZKCVHuE4dsqBcvZaoM1727J85F69LPtBwRWAD52FcfSiwDWqDlzsPdaSbZFD69U9+VfedWI/l8TNWTJGOmlkl7Kl9jBjeTURgvmzc2f/wCIp36v+RlxYc3AtylOYEA16d/3g/kZYe828S4VURaVRzUDa0yoyhbAm7Ea69O6cLRXOP7Ox1eo5a/RI1n0c5Xh3xAFzRxAAJOcuhHMg3Ktc2sek626e8i4mu9JUqDKgYs7Ky2J7NiDe5B+Rm6WNxVtHIU0zBv1WxKVKD4cO2Rruq2ykHkHv7j5zf3f3gxGIZlfCtTULcOWBUm9sunWcH0hNULILPwA6ivw75rFcy8tbazBuGv+KqDCiqMLkF8+a3Ev9nN4TmZJSTe066xxentpWvclu0lVgc2UHxPKQDbNQKzKr5vcNB1531k92tSCL2rH4ytttuMzEA2PPuE+cwwksrU1zZo0b9N2crAY6oayZWCJc2AUEnQjtE85YfoiZjhauYgni8wLX+jTnK52dh/pqY0tm0PTkZY/onI4NcA8qo931Fn0Ona3UjmajxW25difRPkTeZSqPTM3bwwv9lzzI0uoP8xK5oML3JHPmSp8uXcfISw/TW2U4Vr6/SC1+hAP5Ss6GI1/qf07hLqqKZ0NLlW3a/Y6+L2bcZ0sQRy0Pff7R7m8pzsJiqmFqrVpmxXyYHmrDuM62z9r5RYm/j2u7xYDmx/7tNvENRq3JAF7cgNdPADu7z+Usx5tv0TzRhkX7R19kbdwaKoasyt2C4U3DEkl1At4gG55CZqO8FFVAqVgLAlDrYvmcgsAOWUJy75C8TslB9V7a8jr7/HmrTnV8KU5kfC88WPHLncytzmv+qLL2Dv7h6NArUDs4dtVBZXvdrqTYAa2t4Tg7yekDEYlWp0l4NM6Gxu7DuLDkPAec193N3HxgVPWEUISLEEstxmygcr9eck+E3EwlNmFbiVCGUL2ioa4uTZddPfOLk0uCOZzq2cnPqW5NdiK7Hq4XhU0KFqgLMRkGpLr2cx0+otgToMzGSWjjkfODTVGRFFMBLhWKvmYAG9s7/7RPVHYlHkiUAC1hdC2mawJLX0mw2zDTW4NAAXOlMeHs6Xvp3w8hzJZk+yNbHbRw1MqHAZWDM6ZAWCvZFXNbRVylrc+U4G1ttUzTAo00z5zd8moQA5FXMPbbppYTt4hspAZKb3sAOEh6X52mEjDOLvg0Kgasgen8bqbSULlykXYYTmrirIDVckksdSec6O75HrFMnlm1lj7p7vYEs+IFJ1FO6FajB0BZQSyk9ynr96Rz9kKlEmvTrU6lNLkkEggajl8Z7lVQ5NWGNZYxfeye4bh1aTYerqjqVv3qw5H3G1vcJR+29k1tn4l6LFkYE5HUlc6E9lgVPUdOhlmbL2uEXJUuV+ye6Zdp16OIK5wj5T2c4Ulb9QxGky6XqEsXpmrXyfQ5+nylL0kI2HgqjBnqMzO9s7uSxVQLAFjzNunukhqVAqKiiyry+PMnxnjE2DWDKQOQUkgfITXd5freoSzxUEqijpdN6XHA/Ek7b/g3djJmrp1s1/yk93n3WXGmk3GanwwwsoBzBsp692X5yG7pJnrn2VB/wBwEtFAJo0XEDmdZp5/8EGPo3Q8sXU8bqhB94AEkO7O7YwXEPENR6jLdiAuVVUKqqB0Gs7gYCYcRXCqW+6CfIXmtzdcs5Kiipts7UxBxW0BTWsc700RkDFV4Yykj3+EnO6W8BrNwThqtPKoJdlyqx0B+JnO3LxJWmxdrFmLG511Yn85JDi71A2cZQtrZjqb3va1u7rMu2pbrNuTOnjUNv8Amz7tvAq/bLGwsCOh1kUxOzBVcoo7IGpty85LauLRxY2IuDzHTWaFfIaim5AAtm4jC1+d7HUzl6rSJzeSLqxh1DgqIVQ3WCuKgdlVXBsLcrkST+jzCLRFdASbuD2jcns2/KbVOoznKpNzcjtv9UMR387CZ9gUV4rs31+g8O+x6mw1nmjnJZUm2yWbI5xdkkiIneMNIrbf/dGvtA0WSoiGmGBDhtc1rEEe6Q8+i3GfvqJ/HL04Pj8p5OH8flPXJ9gm12KMX0Z41eVWl8M3h4eE9D0dY8f5lL/d4j85eBw3j8o9V8flIk/EkUi3o/2j+8p87/a9/l+s8/3e7QuDxKdxa31unKXd6n7Xyj1P2j5QPEkVRu/utjcKrKcjMzZwysRbs25nrOtVwOObmov35tf5SwPU/aPlHqY+8fKUSwKTtmOemjOTb9ytTsLGWH0aef8ASeW2BjD/AJafBre7pLM9SH3j5R6kPvHykfLR+CvyWMrB928WedND73P6T1R3cxaEFaaAjlZv6SzPUh94+U++p+0fKTWFLsWw06iqi2iuTsbGlcppoFvmyhsqknmSAtidOc+PsPFlWXhqMwtfMf0lj+p+0fKPU/aPlIy06k7Yjp4xmp+6KxpbtYsCxRD/AMx/SfBuvieqIR3Zv6Sz/U/aPlHqftHykPJY/g7C6nmRVr7q4roqAd2Yn8p4O6WL7k/Ef0lrep+0fKfPUva+U98pD4JLqude5AN2tj18LVZ6iBwyZQEbUHMDfX3SUjaL/uX81/Wdb1L2j5R6l7R8pfjxqCpGLNmlmlvl3OSdov8AuH81/Wcza+KxdSm1OnhwoYWLtU1t3ZQv5yU+pe0fKffU/aPlJtFRXmG2JiVU20PTRSPjc3ntdm43Lc5c3cB2fO9/lLA9T9o+Uep+0fKR2r4Fsrw7Ox/cl/f+dp9p7Ox3VUHuN/yEsL1P2j5T56n7R8o2L4Fsg/8AZuOJBpqpPXNZfJlPKd3ZmBxodOK6KikE2Jdja/ZFxyN+d9O6d+lh8pvf4WmxIrFG7obmIiJbQPsREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/9k="
            name="Pack of 6"
          />
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
export default Product;
