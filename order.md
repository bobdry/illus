---
layout: order
set: order
permalink: /order/
---

<div class="chat ml-1">
<h2>Hatch Effect | Print Order</h2>
<hr class="order-hr">
<form action="https://formspree.io/f/mdowdrkn" method="POST" onsubmit="return validateForm()" id="hatchPrice">
    <div class="row">
        <!-- issue #2 -->
        <div class="col-md-5 text-center">
        <img src="../images/hatch-effect-2-cover.jpg" class="img-fluid pt-3 pr-md-2 pl-md-3 pb-3"/>
        <p class="quantity">Issue #<span class="quantity-one">2</span> Quantity</p>
            <select name="quantity" class="order-quantity" id="hatchPriceIssueTwo">
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
        </div>
        <!-- issue #1 -->
        <div class="col-md-5 text-center">
        <img src="../images/hatch1.jpg" class="img-fluid pt-3 pr-md-2 pl-md-3 pb-3"/>
        <p class="quantity text-center">Issue #<span class="quantity-one">1</span> Quantity</p>
            <select name="quantity" class="order-quantity" id="hatchPriceIssueOne">
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-md-5">
            <p>Name</p>
            <input type="text" name="name" placeholder="" class="mini_chat" required>
        </div>
    </div>
    <div class="row">
        <div class="col-md-5">
            <p>Email</p>
            <input type="email" name="email" placeholder="" class="mini_chat" required>
        </div>
        <div class="col-md-5">
            <p>Phone Number</p>
            <input type="tel" name="tel" title="Phone Number" required>
        </div>
    </div>



    <p><strong>Shipping address</strong></p>
    
    <fieldset>
                <!-- address-line1 input-->
                <div class="control-group">
                    <label class="control-label">Address Line 1</label>
                    <div class="controls">
                        <input id="address-line1" name="address-line1" type="text" placeholder="" class="input-xlarge"  required>
                        <p class="help-block">Street address, P.O. box, company name, c/o</p>
                    </div>
                </div>
                <!-- address-line2 input-->
                <div class="control-group">
                    <label class="control-label">Address Line 2</label>
                    <div class="controls">
                        <input id="address-line2" name="address-line2" type="text" placeholder="" class="input-xlarge">
                        <p class="help-block">Apartment, suite , unit, building, floor, etc.</p>
                    </div>
                </div>
                <!-- city input-->
                <div class="control-group">
                    <label class="control-label">City / Town</label>
                    <div class="controls">
                        <input id="city" name="city" type="text" placeholder="" class="input-xlarge" required>
                        <p class="help-block"></p>
                    </div>
                </div>
                <!-- region input-->
                <div class="control-group">
                    <label class="control-label">State</label>
                    <div class="controls">
                        <input id="region" name="region" type="text" placeholder="" class="input-xlarge" required>
                        <p class="help-block"></p>
                    </div>
                </div>
                <!-- postal-code input-->
                <div class="control-group">
                    <label class="control-label">Zip / Postal Code</label>
                    <div class="controls">
                        <input id="postal-code" name="postal-code" type="text" placeholder="" class="input-xlarge" required>
                        <p class="help-block"></p>
                    </div>
                </div>
            </fieldset>
    
    <p class="help-block"><em>Please allow one to two weeks for comics to arrive. Payment will be collected in the next step using <strong><a href="https://squareup.com/" target="_blank">Square</a></strong> secure payment processing. A charge of <strong>$1.99</strong> will be applied to all orders for shipping and handling. For U.S. print orders only. For international print orders submit a request at <strong><a href="{{ "contact/" | prepend: site.baseurl }}">Contact</a></strong>.</em></p> 
    <p><em><strong>Thanks for buying Hatch Effect!</strong></em></p>
    <input type="submit" value="Place Order" class="sender">
</form>
<script type="text/JavaScript" src="{{ "dist/setHatchPrice.min.js" | prepend: site.baseurl }}"></script>
</div>
